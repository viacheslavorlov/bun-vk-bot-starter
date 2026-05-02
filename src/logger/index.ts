import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

export const log = pino({
  level: isProduction ? 'info' : 'debug',
  transport: isProduction
    ? undefined // стандартный JSON-вывод
    : {
        target: 'pino-pretty',
        options: { colorize: true },
      },
});

export function logObject(obj: unknown, message?: string) {
  // pino раскладывает первый объект в JSON, второй идёт как строка-сообщение
  log.info({ message, payload: obj });
}
