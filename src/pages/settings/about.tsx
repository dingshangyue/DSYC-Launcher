import { Text, useToast as useChakraToast } from "@chakra-ui/react";
import { openUrl } from "@tauri-apps/plugin-opener";
import { useTranslation } from "react-i18next";
import { CommonIconButton } from "@/components/common/common-icon-button";
import {
  OptionItemGroup,
  OptionItemGroupProps,
} from "@/components/common/option-item";
import { TitleFullWithLogo } from "@/components/logo-title";
import { useLauncherConfig } from "@/contexts/config";
import { useSharedModals } from "@/contexts/shared-modal";
import { useToast } from "@/contexts/toast";

const AboutSettingsPage = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const { close: closeToast } = useChakraToast();
  const { openSharedModal } = useSharedModals();

  const { config } = useLauncherConfig();
  const basicInfo = config.basicInfo;

  const ackList = {
    skinview3d: "https://github.com/bs-community/skinview3d",
    bmclapi: "https://bmclapidoc.bangbang93.com/",
    hmcl: "https://hmcl.huangyuhui.net/",
    littleskin: "https://github.com/LittleSkinChina",
    sinter: "https://m.ui.cn/details/615564",
    sjtu: "https://mc.sjtu.cn/",
    sjtu_minecraft: "https://mc.sjtu.cn/",
  };

  const aboutSettingGroups: OptionItemGroupProps[] = [
    {
      title: t("AboutSettingsPage.about.title"),
      items: [
        <TitleFullWithLogo key={0} />,
        {
          title: t("AboutSettingsPage.about.settings.version.title"),
          children: (
            <Text fontSize="xs-sm" className="secondary-text">
              {`${basicInfo.launcherVersion}${basicInfo.isPortable ? " (Portable)" : ""}`}
            </Text>
          ),
        },
        {
          title: t("AboutSettingsPage.about.settings.contributors.title"),
          children: (
            <CommonIconButton
              label="https://github.com/dingshangyue/DSYC-Launcher"
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              h={18}
              onClick={() => {
                openUrl("https://github.com/dingshangyue/DSYC-Launcher");
              }}
            />
          ),
          description: "HaloTeam, 淡水鱼",
        },
        {
          title: t("AboutSettingsPage.about.settings.reportIssue.title"),
          children: (
            <CommonIconButton
              label="https://github.com/dingshangyue/DSYC-Launcher/issues"
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              h={18}
              onClick={() => {
                openUrl("https://github.com/dingshangyue/DSYC-Launcher/issues");
              }}
            />
          ),
        },
        {
          title: t("AboutSettingsPage.about.settings.aboutDSYC.title"),
          children: (
            <CommonIconButton
              label="https://mc.sjtu.cn/welcome/content/3/"
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              h={18}
              onClick={() => {
                openUrl("https://mc.sjtu.cn/welcome/content/3/");
              }}
            />
          ),
        },
      ],
    },
    {
      title: t("AboutSettingsPage.ack.title"),
      items: Object.entries(ackList).map(([key, url]) => {
        return {
          title: t(`AboutSettingsPage.ack.settings.${key}.title`),
          description: t(`AboutSettingsPage.ack.settings.${key}.description`),
          children: (
            <CommonIconButton
              label={url}
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              onClick={() => {
                openUrl(url);
              }}
            />
          ),
        };
      }),
    },
    {
      title: t("AboutSettingsPage.legalInfo.title"),
      items: [
        {
          title: t("AboutSettingsPage.legalInfo.settings.copyright.title"),
          description: t(
            "AboutSettingsPage.legalInfo.settings.copyright.description"
          ),
          children: <></>,
        },
        {
          title: t("AboutSettingsPage.legalInfo.settings.userAgreement.title"),
          children: (
            <CommonIconButton
              label={t(
                "AboutSettingsPage.legalInfo.settings.userAgreement.url"
              )}
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              h={18}
              onClick={() => {
                openUrl(
                  t("AboutSettingsPage.legalInfo.settings.userAgreement.url")
                );
              }}
            />
          ),
        },
        {
          title: t(
            "AboutSettingsPage.legalInfo.settings.openSourceLicense.title"
          ),
          description: t(
            "AboutSettingsPage.legalInfo.settings.openSourceLicense.description"
          ),
          children: (
            <CommonIconButton
              label="https://github.com/UNIkeEN/DSYCL?tab=readme-ov-file#copyright"
              icon="external"
              withTooltip
              tooltipPlacement="bottom-end"
              size="xs"
              onClick={() => {
                openUrl(
                  "https://github.com/UNIkeEN/DSYCL?tab=readme-ov-file#copyright"
                );
              }}
            />
          ),
        },
      ],
    },
  ];

  return (
    <>
      {aboutSettingGroups.map((group, index) => (
        <OptionItemGroup title={group.title} items={group.items} key={index} />
      ))}
    </>
  );
};

export default AboutSettingsPage;
