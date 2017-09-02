import { shellExec, log, bashScripts } from './helpers';

/* START DEV SERVER */
log.header('starting dev server').then(() => {
  shellExec(bashScripts.tunnel).then(log.success).catch(log.error);
}).then(() => {
  shellExec(bashScripts.dev).then(log.success).catch(log.error);
}).catch(log.error);
