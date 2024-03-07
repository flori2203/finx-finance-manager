import React from 'react';
import { ThemeContextProvider } from '@app/context/ThemeContext';
import RouterConfig from '@app/features/router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={'/'}>
        <ThemeContextProvider>
          <RouterConfig />
        </ThemeContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
