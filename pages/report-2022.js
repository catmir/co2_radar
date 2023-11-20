import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomTable from '@/components/CustomTable';
import Link from "next/link";

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
                    <p className="col-md-6 text-light fs-5 fw-light">Last year was characterized by the recovery of the economy after the recessionary years during the Covid-19 pandemic. Industrial production returned to pre-pandemic levels in almost all countries worldwide.</p>
                    <p className="col-md-6 text-light fs-5 fw-light">At the same time, CO<sub>2</sub> emissions unfortunately rose to familiar heights. Please find an excerpt of the 41 largest CO<sub>2</sub> emitters<sup>1</sup> (in metric tons) in the table below, filterable by company name and country of origin.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="container my-md-5 py-md-5">
              <div className="row">
                <h2 className="text-xl-center text-primary fw-medium pb-1 pb-sm-2 mb-4">Selection of CO<sub>2</sub> Emitters<sup>1</sup></h2>
                <CustomTable/>
                <div className="mt-5" style={{color: "#434a57"}}>
                  <h3 className="fs-5 pb-2" style={{color: "#121519"}}><sup>1</sup> Sources:</h3>
                  <p>Statista. (17. Mai 2023). Direct greenhouse gas emissions of largest oil companies worldwide in 2022 (in million metric tons of CO2-equivalent) [Graph]. Link: <Link className="text-primary" href="https://www-statista-com.pxz.iubh.de:8443/statistics/1267242/greenhouse-gas-emissions-of-select-oil-companies/">Statista</Link>.</p>
                  <p>Statista. (24. Juli 2023). Scope 1 greenhouse gas emissions from leading tech companies worldwide in 2022, by company (in metric tons of CO2 equivalent) [Graph]. Link: <Link className="text-primary" href="https://www-statista-com.pxz.iubh.de:8443/statistics/1250461/greenhouse-gas-emissions-scope-1-top-tech-companies-worldwide/">Statista</Link>.</p>
                  <p>Statista. (25. August 2023). Total greenhouse gas emissions of selected major metal and mining companies worldwide in 2022 (in million metric tons of carbon dioxide equivalent) [Graph]. Link: <Link className="text-primary" href="https://www-statista-com.pxz.iubh.de:8443/statistics/1409024/metal-mining-emissions-of-greenhouse-gases-by-company/">Statista</Link>.</p>
                  <p>Transport & Environment. (13. Juli 2023). Ranking der Kreuzfahrtunternehmen in Europa nach Höhe der ausgestoßenen CO2-Emissionen im Jahr 2022 (in Millionen Tonnen Kohlendioxid) [Graph]. Link: <Link className="text-primary" href="https://de-statista-com.pxz.iubh.de:8443/statistik/daten/studie/1412754/umfrage/kreuzfahrtunternehmen-in-europa-nach-hoehe-der-co%25E2%2582%2582-emissionen/">Statista</Link>.</p>
                  <p>WWF. (6. Juni 2023). Jährliche Emissionen der größten Emittenten in der deutschen Industrie im Jahr 2022 (in Mio. Tonnen CO2) [Graph]. Link: <Link className="text-primary" href="https://de-statista-com.pxz.iubh.de:8443/statistik/daten/studie/1389225/umfrage/groessten-emittenten-der-deutschen-industrie/">Statista</Link>.</p>
                </div>

              </div>
            </section>

          </main>
    
          <Footer/>
        </>
      );
  }