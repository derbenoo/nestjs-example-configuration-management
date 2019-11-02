import { Controller, Get } from '@nestjs/common';
import { HelloWorldConfig } from './hello-world.config';

@Controller()
export class HelloWorldController {
  constructor(private readonly config: HelloWorldConfig) {}

  @Get('hello-world')
  sayHello(): string {
    return this.config.greeting;
  }
}
