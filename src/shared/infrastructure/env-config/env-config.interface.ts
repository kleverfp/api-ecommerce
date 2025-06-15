export interface EnvConfig {
  getAppPort(): number;
  getNodeEnv(): string | undefined;
  getJwtSecret(): string | undefined;
  getJwtExpiresInSeconds(): number;
}
