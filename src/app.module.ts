import { Module } from '@nestjs/common';
import { HelloWorldModule } from './feature-modules/hello-world/hello-world.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule.forRoot(), HelloWorldModule],
  providers: [],
})
export class AppModule {}
