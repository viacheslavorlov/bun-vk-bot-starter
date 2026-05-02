import { Updates, Upload } from 'vk-io';
import { api } from './api';
import { log, logObject } from './logger';

const upload = new Upload({ api });

const updates = new Updates({ api, upload });
setInterval(() => {
  const mem = process.memoryUsage();
  log.info(
    `RSS: ${(mem.rss / 1024 / 1024).toFixed(1)} MB, Heap: ${(mem.heapUsed / 1024 / 1024).toFixed(1)} MB`,
  );
}, 5000);

updates.on('message_new', async (ctx) => {
  logObject(ctx, 'Messate TExt');
});

updates.start().catch((error) => {
  log.error('Error on bot starting');
  log.error(error);
});

log.info(`Bot started successfully.`);
