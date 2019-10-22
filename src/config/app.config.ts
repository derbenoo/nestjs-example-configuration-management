import { HelloWorldConfig } from '../feature-modules/hello-world/hello-world.config';
import { Configurable } from 'ts-configurable';
import { GoodbyeWorldConfig } from '../feature-modules/goodbye-world/goodbye-world.config';

@Configurable()
export class AppConfig {
  readonly helloWorld: HelloWorldConfig = {
    greeting: 'Hello World!',
  };

  readonly goodbyeWorld: GoodbyeWorldConfig = {
    lastWords: 'Goodbye World!',
  };
}
