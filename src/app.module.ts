import { Module } from '@nestjs/common';
import { HelloWorldModule } from './feature-modules/hello-world/hello-world.module';
import { ConfigModule } from './config/config.module';
import { HelloMarsModule } from './feature-modules/hello-mars/hello-mars.module';

@Module({
  imports: [ConfigModule.forRoot(), HelloWorldModule, HelloMarsModule],
  providers: [],
})
export class AppModule {}
