import configBoth from './both';
import configDev from './dev';
import configProd from './prod';

export default (app) => {
  configBoth(app);
  configDev(app);
  configProd(app);
};
