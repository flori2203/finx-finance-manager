import { ThemeProvider } from '@app/context/ThemeContext';
import RouterConfig from '@app/features/router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function App() {
  const queryClient = new QueryClient();

  console.log('App rendered');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <BrowserRouter basename={'/'}>
          <RouterConfig />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
