import { Controller, Get } from '@nestjs/common';
import { GoodbyeWorldConfig } from './goodbye-world.config';

@Controller()
export class GoodbyeWorldController {
  constructor(private readonly config: GoodbyeWorldConfig) {}

  @Get('goodbye')
  sayGoodbye(): string {
    return this.config.lastWords;
  }
}
