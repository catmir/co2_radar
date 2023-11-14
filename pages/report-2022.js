import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomTable from '@/components/CustomTable';

export default function Report2022() {
    const title = 'CO\u2082 Radar – Report 2022';

    return (
          <>
          <Head>
            <title>{title}</title>
            <meta name="description" content="CO2 Report 2022" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Header/>
    
          <main>
            <section id="report" className="container">
              <div className="row">
                <div className="col-4">
                  <h1 className="fs-1 fw-semibold lh-base">Our CO<sub>2</sub> Report <br></br>for 2022</h1>
                </div>
                <div className="col-8">
                  <p className="fs-5 fw-light">Last year was characterized by the recovery of the economy after the recessionary years during the Covid-19 pandemic. Industrial production returned to pre-pandemic levels in almost all countries worldwide. At the same time, CO<sub>2</sub> emissions unfortunately rose to familiar heights.</p>
                  <p className="fs-5 fw-light">Here is an excerpt of the 41 largest CO<sub>2</sub> emitters (in metric tons), filterable by company name and country of origin.</p>
                </div>
              </div>
            </section>

            <section className="m-5">
              <CustomTable/>
            </section>
          </main>
    
          <Footer/>
        </>
      );
  }