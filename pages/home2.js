/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
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
                <h1 className="display-3 text-uppercase fw-semibold pb-3 mb-4">Monitoring the World's Polluters</h1>
                <p className="fs-5 fw-light pb-2 pb-md-4 pb-xl-5 mb-xl-2">Take a look at the carbon dioxide emissons data that we are continuously collecting from companies around the globe.</p>
                <div className="d-sm-flex">
                  <Link className="btn btn-outline-light px-4 py-2 mb-sm-0 me-sm-3 me-lg-4" href="#" role="button">Latest CO<sub>2</sub> Reports</Link>
                </div>
              </div>
              <div className="col-6 h-100 overflow-hidden d-none d-lg-block">
                <img src="/white-smoke-photo-marcin-jozwiak.jpg" width='100%' height='100%' className="rounded-circle" alt="Picture of carbon dioxide emitting factory"/>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary position-relative py-4 py-md-5">
          <div className="container position-relative zindex-2">
            <div className="row">
              <div className="col-3 d-flex justify-content-md-center">
                <div className="py-3 my-lg-2 my-xl-3">
                  <div className="text-dark fw-semibold display-2 text-center mb-1">41</div>
                  <p className="fs-xl text-center mb-0">Companies</p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-md-center">
                <div className="py-3 ps-xl-4 my-lg-2 my-xl-3">
                  <div className="text-dark fw-semibold display-2 text-center mb-1">15</div>
                  <p className="fs-xl text-center mb-0">Countries</p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-md-center">
                <div className="py-3 my-lg-2 my-xl-3">
                  <div className="text-dark fw-semibold display-2 text-center mb-1">3.3</div>
                  <p className="fs-xl text-center mb-0">Billion Tons of CO<sub>2</sub></p>
                </div>
              </div>
              <div className="col-3 d-flex justify-content-md-center">
                <div className="py-3 pe-xl-4 my-lg-2 my-xl-3">
                  <div className="text-dark fw-semibold display-2 text-center mb-1">24/7</div>
                  <p className="fs-xl text-center mb-0">Under Surveillance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 my-xl-3 my-xxl-5">
          <div className="row pt-1 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-2">
            <div className="col-4">
              <h2 className="pb-1 pb-sm-2 mb-4">Our latest reports</h2>
            </div>
            <div className="col-8">
              <p className="fs-5 fw-light">We have been monitoring and documenting the CO<sub>2</sub> emissions of companies from all kinds of industries for many years.</p>
              <p className="fs-5 fw-light">Our wealth of data is a valuable source for politicians, journalists and environmental activists worldwide to better understand the extent of past and present greenhouse gas emissions.</p>
            </div>
          </div>
        </section>

        <section className="card bg-primary m-5 py-3">
          <div className="card-body position-relative d-sm-flex align-items-center justify-content-evenly zindex-2 text-center">
            <h2 className="card-text text-light">Do you want to support us?</h2>
            <Link className="btn btn-light fs-5 fw-medium py-3 px-5" href="/contribute">Click here!</Link>
          </div>
        </section>

      </main>

      <Footer/>
    </>
  )
}