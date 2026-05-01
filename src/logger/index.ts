import logger from 'pino';

export const log = logger({
  level: Bun.env.LOG_LEVEL ?? 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      colorizeObjects: true,
    },
  },
});

export function logObject(obj: unknown, message?: string) {
  // pino раскладывает первый объект в JSON, второй идёт как строка-сообщение
  log.info({ message, payload: obj });
}
