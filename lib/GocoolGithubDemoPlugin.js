import path from 'path';
import { Plugin, Server, Logger } from 'gocool';
import routes from './routes';

export default class GocoolGithubDemoPlugin extends Plugin {
  constructor() {
    super();

    this._logger = new Logger('GocoolGithubDemoPlugin');

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
    this._logger.debug('Init GocoolGithubDemoPlugin plugin after server started');
  }
}
