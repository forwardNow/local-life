import fs from 'fs';
import { HOST } from '../config/contant';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

export function rewriteHostFile() {
  if (!isDev) {
    return;
  }

  const filePath = path.resolve(__dirname, '../../../../', './wxmp/config/host.js');

  const content = `export default '${HOST}';`;
  fs.writeFileSync(filePath, content);

  console.log(`${filePath} is rewrote`);
}

