import Head from "next/head";
import Image from "next/image";
/* missing Styles import */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contribute() {
  const title = 'CO\u2082 Radar – Contribute';

  return (
        <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Contribute to our work" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header/>
  
        <main>
        <div className="container my-5">
          <h1>Contribute to Our Work</h1>
          <p className="fs-5">Descriptive Text</p>
        </div>
        </main>
  
        <Footer/>
      </>
  );
}