use serde::Serialize;
use std::error::Error;

#[derive(Debug, Serialize, PartialEq, Eq)]
pub struct DSYCLauncherError(pub String);

pub type DSYCLauncherResult<T> = Result<T, DSYCLauncherError>;

impl<T> From<T> for DSYCLauncherError
where
  T: Error,
{
  fn from(err: T) -> Self {
    DSYCLauncherError(err.to_string())
  }
}
