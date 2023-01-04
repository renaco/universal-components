import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap" rel="stylesheet" />
        <style> @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap'); </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}