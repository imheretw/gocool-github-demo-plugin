import path from 'path';
import { Plugin, Server, Logger } from 'gocool';
import routes from './routes';

export default class GocoolGithubDemoPlugin extends Plugin {
  constructor() {
    super();

    this._logger = new Logger('GocoolSamplePlugin');

    this.on(Server.EVENTS.STARTED, () => {
      this._init();
    });
  }

  getRoutes() {
    return routes;
  }

  getViews() {
    const rootPath = path.normalize(__dirname);
    return [`${rootPath}/views`];
  }

  _init() {
    this._logger.debug('Init GocoolSamplePlugin plugin after server started');
  }
}
