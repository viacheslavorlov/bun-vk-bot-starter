import { API } from 'vk-io';

export const api = new API({
  token: Bun.env.VK_GROUP_TOKEN!,
});
