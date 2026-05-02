import { API } from 'vk-io';
import { log } from '../logger';

log.info(process.env);

export const api = new API({
  token: process.env.VK_GROUP_TOKEN!,
});
