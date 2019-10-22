import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller';

@Module({
  controllers: [HelloWorldController],
})
export class HelloWorldModule {}
