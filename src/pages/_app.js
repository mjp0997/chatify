
// Styles
import '../styles/index.css';

const MyApp = ({ Component, pageProps }) => {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page);
   
   return getLayout(<Component {...pageProps} />);
}

export default MyApp;