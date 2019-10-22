import { Module, DynamicModule, Global } from '@nestjs/common';
import { AppConfig } from './app.config';
import { HelloWorldConfig } from '../feature-modules/hello-world/hello-world.config';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    const config = new AppConfig();

    const providers = [
      { provide: HelloWorldConfig, useValue: config.helloWorld },
    ];

    return {
      module: ConfigModule,
      providers,
      exports: providers,
    };
  }
}
