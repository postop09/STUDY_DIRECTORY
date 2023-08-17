import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*<link rel="icon" href="/favicon.ico" />*/}
        <link
          rel="icon"
          // type="image/png"
          // sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
