import { authFormSchema, loginSchema, userRegistrationForm } from '@/schemas/user.schema';
import { ApiOf, makeApi, Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import { z } from 'zod';

const BASE_URL = 'https://apidev1.jagohemat.com';

export const userApi = makeApi([
  {
    method: 'post',
    path: '/v1/auth/sign_in',
    alias: 'login',
    description: 'post login',
    parameters: [
      {
        type: 'Body',
        name: 'body',
        schema: authFormSchema,
      },
    ],
    response: loginSchema,
  },
  {
    method: 'post',
    path: '/v1/users',
    alias: 'registerUser',
    description: 'post user registration',
    parameters: [
      {
        type: 'Body',
        name: 'body',
        schema: z.object({ user: userRegistrationForm }),
      },
    ],
    response: z.any(),
  },
]);

export const userApiClient = new Zodios(BASE_URL, userApi);
export type UserApiClient = ApiOf<typeof userApiClient>;

export const userHooks = new ZodiosHooks('user', userApiClient);
