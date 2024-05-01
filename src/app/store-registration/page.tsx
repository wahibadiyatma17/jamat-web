'use client';

import StoreRegistration from '@/features/store-registration';
import { useState, useEffect } from 'react';

export default function StoreRegistrationPage() {
  const [isWindowReady, setIsWindowReady] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsWindowReady(true);
  }, []);

  return isWindowReady ? <StoreRegistration /> : <></>;
}
