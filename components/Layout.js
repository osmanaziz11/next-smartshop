import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? title + '- SmartShop' : 'Buy Online - SmartShop'}
        </title>
        <meta name="description" content="E-commerce Online Store"></meta>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};
export default Layout;
