import { z } from 'zod';

export const userRegistrationForm = z.object({
  username: z.string(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

export type UserRegistration = z.infer<typeof userRegistrationForm>;
