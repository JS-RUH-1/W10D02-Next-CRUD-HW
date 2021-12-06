import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => (
    <>
        <Head>
        <link
            href="/static/semantic/dist/semantic.min.css"
            rel="stylesheet"
          />
       <link href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" rel="stylesheet" />

            <title>Planet App</title>
        </Head>
        <Navbar />
        {children}
    </>
)

export default Layout;