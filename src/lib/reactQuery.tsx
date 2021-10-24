import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient();

export const QueryWrapper: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
