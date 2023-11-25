import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ThemesProvider from './contexts/ThemesContext.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0
      staleTime: 5 * 60 * 1000
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <BrowserRouter>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </BrowserRouter>
  </QueryClientProvider>
  // </React.StrictMode>
);
