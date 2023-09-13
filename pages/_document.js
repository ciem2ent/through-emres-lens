import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-fahkwang">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
