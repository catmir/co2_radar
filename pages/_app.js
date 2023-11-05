import "bootstrap/dist/css/bootstrap.min.css";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.css";
import { useEffect } from "react";

const notoSans = Noto_Sans({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap', 
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return ( 
    <div className={notoSans.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;