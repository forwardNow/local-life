import path from 'path';
import address from 'address';

export const ROOT_PATH = path.resolve(__dirname, '../../../');

export const PORT = '3000';

export const IP = address.ip();

export const HOST = `http://${IP}:${PORT}`

export const STATIC_ROOT = path.resolve(ROOT_PATH, './static');

export const LOG_DIR = path.resolve(ROOT_PATH, './logs');

export const IS_DEV = process.env.NODE_ENV === 'development';

export const IS_PROD = process.env.NODE_ENV === 'production';
