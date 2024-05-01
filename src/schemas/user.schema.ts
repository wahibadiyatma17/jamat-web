import { z } from 'zod';

export const userRegistrationForm = z.object({
  username: z.string(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

export type UserRegistration = z.infer<typeof userRegistrationForm>;

export const authFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type AuthForm = z.infer<typeof authFormSchema>;

export const userSchema = z.object({
  id: z.string(),
  avatar: z.object({
    url: z.string(),
    thumb: z.object({
      url: z.string(),
    }),
    medium: z.object({
      url: z.string(),
    }),
  }),
  city: z.string().nullable(),
  country: z.string().nullable(),
  created_at: z.string(),
  email: z.string(),
  lang: z.string(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  name: z.string(),
  updated_at: z.string(),
  username: z.string(),
  access_token: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const loginSchema = z.object({
  message: z.string(),
  user: userSchema,
});

export type Login = z.infer<typeof loginSchema>;
