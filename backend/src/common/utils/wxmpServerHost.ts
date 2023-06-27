import fs from 'fs';
import path from 'path';
import { HOST, IS_DEV } from '../config/constant';
import { appLogger } from '../config/log4js';

export function rewriteHostFile() {
  if (!IS_DEV) {
    return;
  }

  const filePath = path.resolve(__dirname, '../../../../', './wxmp/config/host.js');

  const content = `export default '${ HOST }';`;
  fs.writeFileSync(filePath, content);

  appLogger.info(`${ filePath } is rewrote`);
}

