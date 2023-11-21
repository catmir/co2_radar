import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    
          <main className="page-wrapper">

            <section className="position-relative py-5">
              <div className="container position-relative zindex-2 py-md-3 py-lg-5">
                <div className="row align-items-start pt-5 pb-2 pb-sm-3 mt-sm-4">
                  <h1 className="fs-1 fw-semibold lh-base">Please Contact Us</h1>
                  <div className="row align-items-start mt-5">
                    <h2 className="fs-4 mb-5">CCIR Climate Change Is Real, Inc</h2>
                    <p className="fs-5 fw-light">Green Building 4U, 12345 City of Ideals</p>
                    <p className="fs-5 fw-light">+123 xxx xxxx xxx xxx</p>
                    <p className="fs-5 fw-light">E-Mail: <Link className="text-primary" href="#">contact@ccir.com</Link></p>
                  </div>
                </div>
              </div>
            </section>

          </main>
    
          <Footer/>
        </>
      );
  }