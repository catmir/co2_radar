import Head from "next/head";
import Image from "next/image";
/* missing Styles import */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Report2022() {
    const title = 'CO\u2082 Radar – Report 2022';

    return (
          <>
          <Head>
            <title>{title}</title>
            <meta name="description" content="About us at CO2 Radar" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Header/>
    
          <main>
          <div className="container my-5">
            <h1>Report 2022</h1>
            <p className="fs-5">Descriptive Text</p>
          </div>
          </main>
    
          <Footer/>
        </>
      );
  }