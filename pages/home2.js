import Link from 'next/link'
import Head from 'next/head'
import styles from "@/styles/Home.module.css"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

 
/* Disable Server Side Rendering for use of window object in Browser */
const DynamicLanguage = dynamic(() => import('@/components/Language'), {
  ssr: false,
})

export default function Home() { 
  const title = 'CO\u2082 Radar – Home';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Carbon footprint obervation by CCIR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="page-wrapper">
        <section className="bg-dark dark-mode position-relative py-5">
          <div className="container position-relative zindex-2 py-md-3 py-lg-4 py-xl-5">
            <div className="row align-items-center pt-5 pb-2 pb-sm-3 mt-sm-4">
              <div className="col-6 text-light">
                <h1 className="display-3 fw-bold text-uppercase pb-3 mb-4">Monitoring the World's Polluters</h1>
                <p className="fs-5 fw-light pb-2 pb-md-4 pb-xl-5 mb-xl-2">Take a look at the carbon dioxide emissons data that we are continuously collecting from companies around the globe.</p>
                <div className="d-sm-flex">
                  <Link className="btn btn-outline-light px-4 py-2 mb-sm-0 me-sm-3 me-lg-4" href="#" role="button">Latest CO<sub>2</sub> Reports</Link>
                </div>
              </div>
              <div className="col-6 h-100 overflow-hidden d-none d-lg-block">
                <img src="/white-smoke-photo-marcin-jozwiak.jpg" width='100%' height='100%' alt="Picture of carbon dioxide emitting factory"/>
              </div>
            </div>
          </div>
        </section>


        


       



      </main>

      <Footer/>
    </>
  )
}