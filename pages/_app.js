import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
