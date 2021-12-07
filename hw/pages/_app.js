import '../styles/globals.css'
import Layout from '../comp8/Layout8'

function MyApp({ Component, pageProps }) {
  return <Layout>
  <Component {...pageProps} />
</Layout>
}

export default MyApp
// step 7 create componant folder step 8