import { Module } from '@nestjs/common';
import { HelloWorldModule } from './feature-modules/hello-world/hello-world.module';
import { ConfigModule } from './config/config.module';
import { GoodbyeWorldModule } from './feature-modules/goodbye-world/goodbye-world.module';

@Module({
  imports: [ConfigModule.forRoot(), HelloWorldModule, GoodbyeWorldModule],
  providers: [],
})
export class AppModule {}
