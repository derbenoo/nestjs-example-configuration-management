import { Module } from '@nestjs/common';
import { GoodbyeWorldController } from './goodbye-world.controller';

@Module({
  controllers: [GoodbyeWorldController],
})
export class GoodbyeWorldModule {}
