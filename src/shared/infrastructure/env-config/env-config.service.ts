import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env-config.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}
  getJwtSecret(): string | undefined {
    return this.configService.get<string>('JWT_SECRET');
  }
  getJwtExpiresInSeconds(): number {
    throw new Error('Method not implemented.');
  }

  getAppPort(): number {
    return Number(this.configService.get<number>('APP_PORT'));
  }

  getNodeEnv(): string | undefined {
    return this.configService.get<string>('NODE_ENV');
  }

  getDbHost(): string | undefined {
    return this.configService.get<string>('DB_HOST');
  }

  getDbPort(): number {
    return Number(this.configService.get<number>('DB_PORT'));
  }

  getDbUser(): string | undefined {
    return this.configService.get<string>('DB_USER');
  }

  getDbPassword(): string | undefined {
    return this.configService.get<string>('DB_PASSWORD');
  }

  getDbDatabase(): string | undefined {
    return this.configService.get<string>('DB_NAME');
  }
}
