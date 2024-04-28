'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Toaster } from 'react-hot-toast';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        containerStyle={{ zIndex: 10000 }}
        toastOptions={{ duration: 4000 }}
        position="top-center"
        reverseOrder={false}
      />
      {children}
    </QueryClientProvider>
  );
}

export default Providers;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
