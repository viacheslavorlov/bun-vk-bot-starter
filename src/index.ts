import { Updates, Upload } from 'vk-io';
import { api } from './api';
import { log, logObject } from './logger';

const upload = new Upload({ api });

const updates = new Updates({ api, upload });

updates.on('message_new', async (ctx) => {
  logObject(ctx, 'Messate TExt');
});

updates.start().catch(() => {
  log.error('Error on bot starting');
});

log.info(`Bot started successfully.`);
