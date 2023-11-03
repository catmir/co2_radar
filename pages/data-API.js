import Head from "next/head";
import Image from "next/image";
/* missing Styles import */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DataAPI() {
  const title = 'CO\u2082 Radar – Data API';

  return (
        <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Latest CO2 Data" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header/>
  
        <main>
        <div className="container my-5">
          <h1>Data API</h1>
          <div className="col-lg-8 px-0">
            <p className="fs-5">Descriptive Text</p>
  
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        </main>
  
        <Footer/>
      </>
  );
}

