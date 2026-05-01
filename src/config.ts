import { z } from 'zod';

const env = Bun.env;

const envSchema = z.object({
  VK_GROUP_TOKEN: z.string().min(10, { error: 'VK_GROUP_TOKEN not found' }),
  VK_ADMIN_TOKEN: z.string().min(10, { error: 'VK_ADMIN_TOKEN not found' }),
  VK_GROUP_ID: z.coerce.number({ error: 'VK_GROUP_ID not found' }),
});

export const config = envSchema.parse(env);
