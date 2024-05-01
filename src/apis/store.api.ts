import { ApiOf, makeApi, Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';

import { z } from 'zod';
import { storeFormSchema, storeTypesSchema } from '../schemas/store.schema';

const BASE_URL = 'https://apidev1.jagohemat.com';

export const storeApi = makeApi([
  {
    method: 'post',
    path: '/v1/stores',
    alias: 'store',
    description: 'post store',
    parameters: [
      {
        type: 'Body',
        name: 'body',
        schema: storeFormSchema,
      },
      {
        type: 'Header',
        name: 'Authorization',
        schema: z.string(),
      },
    ],
    response: z.any(),
  },
  {
    method: 'get',
    path: '/v1/store_types',
    alias: 'storeTypes',
    description: 'get store types',
    response: storeTypesSchema,
  },
]);

export const storeApiClient = new Zodios(BASE_URL, storeApi);
export type StoreApiClient = ApiOf<typeof storeApiClient>;

export const storeHooks = new ZodiosHooks('store', storeApiClient);
