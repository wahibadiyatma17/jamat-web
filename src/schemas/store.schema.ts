import z from 'zod';

export const storeFormSchema = z.object({
  store_type_ids: z.array(z.string()),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  description: z.string(),
  city: z.string().optional(),
  country: z.string().optional(),
  latitude: z.number(),
  longitude: z.number(),
  address: z.string(),
  address_detail: z.string(),
  active: z.boolean(), // true or false
  photo: z.string().optional(),
  cover: z.string().optional(),
  covers: z.array(z.string()).optional(),
});

export type StoreForm = z.infer<typeof storeFormSchema>;

export const storeTypeData = z.object({
  id: z.string(),
  name: z.string(),
});

export type StoreType = z.infer<typeof storeTypeData>;

export const storeTypesSchema = z.array(storeTypeData);
