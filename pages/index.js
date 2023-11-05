import Link from 'next/link'
import Head from 'next/head'
//import Image from 'next/image'
import bg from '@/public/white-smoke-photo-marcin-jozwiak.jpg'
import styles from "@/styles/Home.module.css"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
import CustomTable from '@/components/CustomTable'
 
/* Disable Server Side Rendering for use of window-Object in Browser */
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

      <main>
        <div className="text-center bg-image">
          <div className="mask"
            style={{
              backgroundImage: `url(${bg.src})`,
              height: '100vh',
              width: '100vw',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              position: 'relative'
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">CO<sub>2</sub> Radar</h1>
                <h2 className="mb-3">Observing the World's Polluters</h2>
                <Link className="btn btn-outline-light btn-lg" href="#home" role="button">Latest report</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            
            <DynamicLanguage/>
            
            <div className="row my-5">
              <h2 id="home">Report 2022</h2>
              
              <p className="fs-5">
              Carbondioxide is one of the most dangerous greenhouse gas emissions in the world.</p>
              <p className={styles.highlight}>Watch out for the worst polluters:</p>

            </div>
              <CustomTable/>
            <div>
             
            
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  )
}