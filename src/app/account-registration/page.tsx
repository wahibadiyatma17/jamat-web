'use client';

import AccountRegistration from '@/features/account-registration';
import { useEffect, useState } from 'react';

export default function AccountRegistrationPage() {
  const [isWindowReady, setIsWindowReady] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsWindowReady(true);
  }, []);

  return isWindowReady ? <AccountRegistration /> : <></>;
}
