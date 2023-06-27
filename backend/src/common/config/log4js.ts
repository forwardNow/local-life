import log4js from 'log4js';
import { IS_DEV, LOG_DIR } from './constant';

const { levels } = log4js;

const FILE_LOG_LAYOUT_PATTERN = '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %c - %m';
const CONSOLE_LOG_LAYOUT_PATTERN = `%[${FILE_LOG_LAYOUT_PATTERN}%]`

log4js.configure({
  appenders: {
    stdout: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: CONSOLE_LOG_LAYOUT_PATTERN,
      },
    },
    app: {
      type: 'dateFile',
      filename: `${LOG_DIR}/app/app.log`,
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      alwaysIncludePattern: true,
      numBackups: 7,
      layout: {
        type: 'pattern',
        pattern: FILE_LOG_LAYOUT_PATTERN,
      },
    },
    access: {
      type: 'dateFile',
      filename: `${LOG_DIR}/access/access.log`,
      pattern: 'yyyy-MM-dd',
      keepFileExt: true,
      alwaysIncludePattern: true,
      numBackups: 7,
      layout: {
        type: 'pattern',
        pattern: FILE_LOG_LAYOUT_PATTERN,
      },
    },
  },
  categories: {
    default: {
      appenders: ['stdout'],
      level: levels.ALL.levelStr
    },
    app: {
      appenders: IS_DEV ? ['stdout', 'app'] : ['app'],
      level: levels.INFO.levelStr
    },
    access: {
      appenders: IS_DEV ? ['stdout', 'access'] : ['access'],
      level: levels.INFO.levelStr
    },
  },
});

export const appLogger = log4js.getLogger('app');
export const accessLogger = log4js.getLogger('access');
