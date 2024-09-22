// pages/_app.js
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'; // Import global styles (e.g., Tailwind)


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
 