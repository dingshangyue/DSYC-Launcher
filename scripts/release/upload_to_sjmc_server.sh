#!/usr/bin/env bash

set -euo pipefail

# Required environment variables:
# - DSYC_SECRET_KEY
# - DSYC_DEPLOY_API
# - DSYC_DEPLOY_PROJECT

if [ -z "${DSYC_SECRET_KEY:-}" ]; then
  echo "❌ DSYC_DEPLOY_SECRET_KEY secret is not set"
  exit 1
fi

if [ -z "${DSYC_DEPLOY_API:-}" ]; then
  echo "❌ DSYC_DEPLOY_API secret is not set"
  exit 1
fi

if [ -z "${DSYC_DEPLOY_PROJECT:-}" ]; then
  echo "❌ DSYC_DEPLOY_PROJECT secret is not set"
  exit 1
fi

# Enforce HTTPS and trim whitespace/newlines
DSYC_DEPLOY_API=$(echo -n "$DSYC_DEPLOY_API" | tr -d '[:space:]')
if [[ ! "$DSYC_DEPLOY_API" =~ ^https:// ]]; then
  echo "❌ DSYC_DEPLOY_API must start with https://"
  exit 1
fi

echo "✅ All required secrets are set"

cd release-artifacts
zip -r ../releases.zip *
cd ..

echo "📦 Created releases.zip with artifacts"

ARTIFACT_HASH=$(sha256sum releases.zip | awk '{ print $1 }')
DEPLOY_TIMESTAMP=$(date +%s)

# HMAC-SHA256: hash of "<timestamp><artifact_hash>" using SECRET_KEY
DEPLOY_HASH=$(echo -n "${DEPLOY_TIMESTAMP}${ARTIFACT_HASH}" | openssl dgst -sha256 -hmac "$DSYC_SECRET_KEY" | cut -d' ' -f2)

echo "🔑 Generated deployment hash"
echo "📅 Timestamp: $DEPLOY_TIMESTAMP"

echo "🚀 Uploading to deployment server..."
set +e

STATUS_CODE=$(curl --tlsv1.2 --proto '=https' --location -X POST "$DSYC_DEPLOY_API" \
                -F "deploy_project=${DSYC_DEPLOY_PROJECT}" \
                -F "deploy_timestamp=${DEPLOY_TIMESTAMP}" \
                -F "deploy_hash=${DEPLOY_HASH}" \
                -F "deploy_artifact=@releases.zip" \
                -sS \
                -o /dev/null \
                --max-time 600 \
                -w "%{http_code}")

CURL_EXIT_CODE=$?
set -e

echo "📡 curl exit code: $CURL_EXIT_CODE, HTTP status: $STATUS_CODE"

if [ "$CURL_EXIT_CODE" -ne 0 ]; then
  echo "❌ curl failed with exit code $CURL_EXIT_CODE"
  exit 1
fi

if [ "$STATUS_CODE" -ne 204 ]; then
  echo "❌ Deployment failed with status code $STATUS_CODE"
  exit 1
else
  echo "✅ Deployment successful"
fi


