import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Planet App </title>
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
