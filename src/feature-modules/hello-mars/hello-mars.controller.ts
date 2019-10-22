import { Controller, Get } from '@nestjs/common';
import { HelloMarsConfig } from './hello-mars.config';

@Controller()
export class HelloMarsController {
  constructor(private readonly config: HelloMarsConfig) {}

  @Get('mars')
  sayHelloMars(): string {
    return this.config.marsianGreeting;
  }
}
