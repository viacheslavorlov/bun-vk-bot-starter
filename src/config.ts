import { z } from 'zod';
import dotenv from 'dotenv';
import { log, logObject } from './logger';

dotenv.config();

const env = process.env;

const envSchema = z.object({
  VK_GROUP_TOKEN: z.string().min(10, { error: 'VK_GROUP_TOKEN not found' }),
  VK_ADMIN_TOKEN: z.string().min(10, { error: 'VK_ADMIN_TOKEN not found' }),
  VK_GROUP_ID: z.coerce.number({ error: 'VK_GROUP_ID not found' }),
});

const jsonSchema = envSchema.toJSONSchema();
logObject(jsonSchema, 'Environment variables schema:');

export const config = envSchema.parse(env);
