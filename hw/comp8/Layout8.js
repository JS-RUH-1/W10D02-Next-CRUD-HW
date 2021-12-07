import Head from 'next/head';
import Navbar from './Navbar9';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Planet App</title>
        </Head>
        <Navbar />
        {children}
    </>
)

//9 we need a navbar
export default Layout;