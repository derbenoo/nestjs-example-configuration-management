import { HelloWorldConfig } from '../feature-modules/hello-world/hello-world.config';
import { Configurable } from 'ts-configurable';
import { HelloMarsConfig } from '../feature-modules/hello-mars/hello-mars.config';

@Configurable()
export class AppConfig {
  readonly helloWorld: HelloWorldConfig = {
    greeting: 'Hello World!',
  };

  readonly helloMars: HelloMarsConfig = {
    marsianGreeting: 'Hello Mars!',
  };
}
