pub static AUTHLIB_INJECTOR_JAR_NAME: &str = "authlib-injector.jar";
pub static PRESET_AUTH_SERVERS: [&str; 1] = ["https://littleskin.cn/api/yggdrasil"];
pub static SCOPE: &str =
  "openid offline_access Yggdrasil.PlayerProfiles.Select Yggdrasil.Server.Join";

pub static CLIENT_IDS: [(&str, &str); 1] = [("littleskin.cn", "1014")];
