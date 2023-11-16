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
    
          <main className="page-wrapper">

            <section id="report" className="bg-dark dark-mode position-relative pt-5 pb-5">
              <div className="container position-relative zindex-2 py-md-3 py-lg-5">
                <div className="row align-items-start pt-5 pb-2 pb-sm-3 mt-sm-4">
                  <h1 className="text-light fs-1 fw-semibold lh-base">Our CO<sub>2</sub> Report for 2022</h1>
                  <div className="row align-items-start pt-3 pb-2 pb-sm-3 mt-sm-4">
                    <p className="col-6 text-light fs-5 fw-light">Last year was characterized by the recovery of the economy after the recessionary years during the Covid-19 pandemic. Industrial production returned to pre-pandemic levels in almost all countries worldwide.</p>
                    <p className="col-6 text-light fs-5 fw-light">At the same time, CO<sub>2</sub> emissions unfortunately rose to familiar heights. Please find an excerpt of the 41 largest CO<sub>2</sub> emitters<sup>1</sup> (in metric tons) in the table below, filterable by company name and country of origin.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="container my-5 py-5">
              <div className="row">
                <h2 className="text-center pb-1 pb-sm-2 mb-4">Selection of CO<sub>2</sub> Emitters<sup>1</sup></h2>
                <CustomTable/>
                <p><sup>1</sup> Sources: xxx</p>
              </div>
            </section>

          </main>
    
          <Footer/>
        </>
      );
  }