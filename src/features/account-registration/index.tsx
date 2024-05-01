'use client';

import { userHooks } from '@/apis/user.api';
import AppLayout from '@/components/layout';
import { UserRegistration } from '@/schemas/user.schema';
import { useUserStore } from '@/stores/user.store';
import { EyeTwoTone, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AccountRegistration: FC = () => {
  const form = useForm<UserRegistration>();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form;
  const router = useRouter();
  const store = useUserStore();
  const register = userHooks.useRegisterUser();
  const login = userHooks.useLogin();

  const onSubmitPress = handleSubmit(
    React.useCallback(
      (values: UserRegistration) => {
        const payload = {
          user: values,
        };

        register.mutateAsync(payload, {
          onSuccess: () => {
            const loginPayload = {
              email: values.email,
              password: values.password,
            };
            login.mutate(loginPayload, {
              onSuccess: (res) => {
                store.setUser(res.user);
                toast.success('Pendaftaran Akun Berhasil');
                router.push('/store-registration');
              },
            });
          },
          onError: () => {
            toast.error('Pendaftaran Akun Gagal');
          },
        });
      },
      [form, register, login, store],
    ),
  );

  return (
    <AppLayout>
      <div className="bg-[#406EDD] rounded-[24px] px-4 md:px-5 py-4 md:py-10 flex flex-col gap-4 md:gap-8 items-center">
        <h6 className="text-[#EBEBEB] font-bold text-[36px]">
          Ayo Bergabung, Daftarkan Bisnis Anda!
        </h6>
        <div className="flex flex-col gap-4 md:gap-8 w-[80%]">
          <Controller
            control={control}
            name={'name'}
            render={({ field }) => (
              <Input
                placeholder="Nama"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '16px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
                prefix={<UserOutlined className="site-form-item-icon" style={{ marginRight: 8 }} />}
              />
            )}
          />

          <Controller
            control={control}
            name={'username'}
            render={({ field }) => (
              <Input
                placeholder="Username"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '16px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
                prefix={<UserOutlined className="site-form-item-icon" style={{ marginRight: 8 }} />}
              />
            )}
          />

          <Controller
            control={control}
            name={'email'}
            render={({ field }) => (
              <Input
                placeholder="email"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '16px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
                prefix={<MailOutlined className="site-form-item-icon" style={{ marginRight: 8 }} />}
              />
            )}
          />

          <Controller
            control={control}
            name={'password'}
            render={({ field }) => (
              <Input.Password
                placeholder="password"
                maxLength={150}
                width={'100%'}
                style={{ borderRadius: '16px', height: '52px' }}
                onChange={(event) => field.onChange(event.target?.value)}
                prefix={<LockOutlined className="site-form-item-icon" style={{ marginRight: 8 }} />}
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
            loading={register.isLoading || login.isLoading}
          >
            Lanjut
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default AccountRegistration;
