import path from 'path';
import address from 'address';

export const PORT = '3000';

export const IP = address.ip();

export const HOST = `http://${IP}:${PORT}`

export const STATIC_ROOT = path.resolve(__dirname, '../../../static');
