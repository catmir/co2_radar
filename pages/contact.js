import Head from "next/head";
import Image from "next/image";
/* missing Styles import */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    const title = 'CO\u2082 Radar – Contact Us';

    return (
          <>
          <Head>
            <title>{title}</title>
            <meta name="description" content="CO2 Radar – Contact Us" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Header/>
    
          <main>
          <div className="container my-5">
            <h1>Contact Us</h1>
            <p className="fs-5">Descriptive Text</p>
          </div>
          </main>
    
          <Footer/>
        </>
      );
  }