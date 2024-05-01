'use client';

import RegistrationSuccess from '@/features/registration-success';
import { useEffect, useState } from 'react';

export default function StoreRegistrationPage() {
  const [isWindowReady, setIsWindowReady] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setIsWindowReady(true);
  }, []);

  return isWindowReady ? <RegistrationSuccess /> : <></>;
}
