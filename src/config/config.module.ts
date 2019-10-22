import { Module, DynamicModule, Global } from '@nestjs/common';
import { AppConfig } from './app.config';
import { HelloWorldConfig } from '../feature-modules/hello-world/hello-world.config';
import { HelloMarsConfig } from '../feature-modules/hello-mars/hello-mars.config';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    const config = new AppConfig();

    const providers = [
      { provide: HelloWorldConfig, useValue: config.helloWorld },
      { provide: HelloMarsConfig, useValue: config.HelloMars },
    ];

    return {
      module: ConfigModule,
      providers,
      exports: providers,
    };
  }
}
