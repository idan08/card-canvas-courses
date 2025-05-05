
import React from 'react';
import { PostHogProvider } from 'posthog-js/react';
import AppRoutes from './Routes';

const App = () => {
  const options = {
    api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
  };

  return (
    <React.StrictMode>
      {process.env.REACT_APP_DEV === "false" ? (
        <PostHogProvider apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY} options={options}>
          <AppRoutes />
        </PostHogProvider>
      ) : (
        <AppRoutes />
      )}
    </React.StrictMode>
  );
};

export default App;
