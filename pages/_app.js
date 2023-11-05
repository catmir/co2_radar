import "bootstrap/dist/css/bootstrap.min.css";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import { useEffect } from "react";

const lato = Lato({ 
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap', 
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return ( 
    <div className={lato.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;