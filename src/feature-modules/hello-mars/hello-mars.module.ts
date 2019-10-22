import { Module } from '@nestjs/common';
import { HelloMarsController } from './hello-mars.controller';

@Module({
  controllers: [HelloMarsController],
})
export class HelloMarsModule {}
