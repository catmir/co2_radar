import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Reports() {
  const title = 'CO\u2082 Radar – Reports';

  return (
        <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Latest CO2 Reports" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header/>
  
        <main className="page-wrapper">

          <section id="report" className="bg-dark dark-mode position-relative py-5">
            <div className="container position-relative zindex-2 py-md-3 py-lg-5">
              <div className="row align-items-start pt-5 pb-2 pb-sm-3 mt-sm-4">
                <h1 className="text-light fs-1 fw-semibold lh-base">Reports</h1>
                <div className="row align-items-start pt-3 pb-2 pb-sm-3 mt-sm-4">
                  <p className="col text-light fs-5 fw-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
                </div>
              </div>
            </div>
          </section>

        </main>
  
        <Footer/>
      </>
  );
}

