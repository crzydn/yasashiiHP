import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GTM_ID"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GTM_ID');
        </script>
        <script src="https://www.clarity.ms/tag/YOUR_CLARITY_ID" async></script>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
};

export default Layout;
