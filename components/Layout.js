import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{`${title} - SmartShop`}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
