import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    const title = 'CO\u2082 Radar – Privacy Policy';

    return (
          <>
          <Head>
            <title>{title}</title>
            <meta name="description" content="Our Privacy Policy at CO2 Radar" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Header/>
    
          <main>
          <div className="container my-5">
            <h1>Privacy Policy</h1>
            <p className="fs-5">Descriptive Text</p>
          </div>
          </main>
    
          <Footer/>
        </>
      );
  }