import { Configuration } from './configuration';

export class CustomConfiguration extends Configuration {
  constructor(basePath: string) {
    super({ basePath });
  }
}
