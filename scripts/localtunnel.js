// JAVASCRIPT FILE
// script restarts localtunnel on a failure

import { shellExec, log } from './helpers';

const ordinal = (number) => {
  const n = number % 100;
  if (n > 10 && n < 14) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

const humanize = n => `${n}${ordinal(n)}`;
const bashScript = ({ subdomain, port }) => `lt --port ${port} --subdomain ${subdomain}`;

let i = 0;
const runTunnel = ({ ...args }) => {
  const { subdomain, port } = { subdomain: 'start', port: 8080, ...args };
  log.header('Tunnel Conecting');
  shellExec(bashScript({ subdomain, port })).then(log.success).catch(() => {
    if (i < 10) {
      i += 1;
      log.header('Tunnel Reconecting');
      console.log(`${humanize(i)} restart...`);
      runTunnel({ subdomain, port });
    } else {
      log.error(`Tunnel loop aborted on ${humanize(i)} attempt`);
    }
  });
};

runTunnel();
