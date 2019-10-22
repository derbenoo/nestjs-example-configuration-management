import { HelloWorldConfig } from '../feature-modules/hello-world/hello-world.config';
import { Configurable } from 'ts-configurable';

@Configurable()
export class AppConfig {
  readonly helloWorld: HelloWorldConfig = {
    greeting: 'Hello World!',
  };
}
