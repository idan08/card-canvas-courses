
import React from 'react';
import AppRoutes from './Routes';

const App = () => {
  const options = {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  };

  return (
    <React.StrictMode>
      {import.meta.env.VITE_DEV === "false" ? (
        <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
          <AppRoutes />
        </PostHogProvider>
      ) : (
        <AppRoutes />
      )}
    </React.StrictMode>
  );
};

export default App;
