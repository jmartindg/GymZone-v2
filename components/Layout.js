import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Welcome to GymZone. Be the Best Version of Yourself." />
        <meta name="keywords" content="gym, fitness, gym website" />
        <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
