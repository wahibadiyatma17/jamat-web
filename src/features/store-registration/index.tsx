'use client';

import { storeHooks } from '@/apis/store.api';
import AppLayout from '@/components/layout';
import Maps from '@/components/maps';
import MapModal from '@/components/modals/map-modal';
import { StoreForm } from '@/schemas/store.schema';
import { useUserStore } from '@/stores/user.store';
import { Button, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useRouter } from 'next/navigation';
import React, { FC, useMemo, useState } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const StoreRegistration: FC = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  const form = useForm<StoreForm>();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form;
  const router = useRouter();
  const userStore = useUserStore();
  const storeTypes = storeHooks.useStoreTypes();
  const register = storeHooks.useStore({
    headers: { Authorization: `Bearer ${userStore.user?.access_token}` ?? '' },
  });

  const storeTypeOptions = useMemo(
    () =>
      storeTypes?.data?.map((type) => {
        return { label: type.name, value: type.id };
      }),
    [storeTypes?.data],
  );

  const onSubmitPress = handleSubmit(
    React.useCallback(
      (values: StoreForm) => {
        const { active, email, city, country, ...formValues } = values;

        const body = {
          active: true,
          city: 'Jakarta',
          country: 'Indonesia',
          email: userStore.user?.email ?? '',
          ...formValues,
        };

        register.mutate(body, {
          onSuccess: (response: any) => {
            toast.success('Pendaftaran Toko Berhasil');
            router.push('/registration-success');
          },
          onError: (error) => {
            toast.error('Pendaftaran Toko Gagal');
          },
        });
      },
      [form, register],
    ),
  );

  const longitude = useController({
    control,
    name: 'longitude',
  });

  const latitude = useController({
    control,
    name: 'latitude',
  });

  return (
    <AppLayout>
      <div className="bg-[#406EDD] rounded-[24px] px-4 md:px-5 py-4 md:py-10 flex flex-col gap-4 md:gap-8 items-center">
        <h6 className="text-[#EBEBEB] font-bold text-[36px]">Detail Toko</h6>
        <div className="flex flex-col gap-4 md:gap-8 w-[80%]">
          <Controller
            control={control}
            name={'name'}
            render={({ field }) => (
              <Input
                placeholder="Nama Toko"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '6px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
              />
            )}
          />
          <Controller
            control={control}
            name={'description'}
            render={({ field }) => (
              <TextArea
                placeholder="Deskripsi"
                style={{ borderRadius: '6px', height: '72px' }}
                onChange={(event) => field.onChange(event.target?.value)}
              />
            )}
          />
          <Controller
            control={control}
            name={'store_type_ids'}
            render={({ field }) => (
              <Select
                mode="multiple"
                value={field.value}
                placeholder={'Pilih Tipe Toko'}
                showSearch
                onChange={(e) => {
                  field.onChange(e);
                }}
                options={storeTypeOptions}
                style={{ borderRadius: '6px', height: '52px' }}
                filterOption={false}
              />
            )}
          />
          <Controller
            control={control}
            name={'phone'}
            render={({ field }) => (
              <Input
                placeholder="Nomor Telepon"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '6px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
              />
            )}
          />
          <Input
            placeholder="Lokasi"
            maxLength={150}
            value={!!latitude.field.value && !!longitude.field.value ? 'Lokasi Telah Dipilih' : ''}
            width={'100%'}
            style={{ borderRadius: '6px', height: '52px' }}
            onClick={() => setShowLocationModal(true)}
          />
          <Controller
            control={control}
            name={'address'}
            render={({ field }) => (
              <Input
                placeholder="Alamat"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '6px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
              />
            )}
          />
          <Controller
            control={control}
            name={'address_detail'}
            render={({ field }) => (
              <TextArea
                placeholder="Detail Alamat"
                style={{ borderRadius: '6px', height: '72px' }}
                onChange={(event) => field.onChange(event.target?.value)}
              />
            )}
          />
        </div>
        <div className="flex items-center justify-end w-[80%]">
          <Button
            disabled={!isValid}
            className="cursor-pointer border-none py-2.5 px-5 rounded-3xl md:min-h-[48px] md:min-w-[144px] flex items-center justify-center bg-[#FF940D] hover:bg-[#DD800C] hover:scale-105 transition-all text-[#FEFFD2] font-bold text-xl"
            onClick={onSubmitPress}
            style={{ background: '#FF940D', color: '#FEFFD2' }}
            loading={register.isLoading}
          >
            Lanjut
          </Button>
        </div>
      </div>
      {showLocationModal && (
        <MapModal
          isOpen={showLocationModal}
          handleClose={() => setShowLocationModal(false)}
          handleOk={(newPosition) => {
            latitude.field.onChange(newPosition.lat);
            longitude.field.onChange(newPosition.lng);
            setShowLocationModal(false);
          }}
        />
      )}
    </AppLayout>
  );
};

export default StoreRegistration;
