import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Melkonian Industries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='row'>
       
          <div className='col-lg-3 brand-patch'>
              <p className='brand-patch-huge-text'>Mi</p>
              <p className='brand-patch-para mb-0'>melkonian industries</p>
              <p className='brand-patch-para mb-0'>100% digital</p>
              <small className='brand-patch-para mb-0'>est. 2022</small>
            </div>
          <div className="col-lg-9">
            <h1 className="font-bold text-3xl font-serif">Melkonian Industries</h1>
            <h2>Professional Services based around innovative software development and a 
              commitment to client satisfaction above all else.</h2>
              <p className="text-neutral-800 dark:text-neutral-200">
                We fit the solution to achieve your goals. Our engagements are based on learning about you, as our client, so we can support your organization's quest for effectiveness, efficiency, and innovation.
              </p>
              <p className="my-3 text-neutral-800 dark:text-neutral-200">
                Our offerings include software consulting, software development, graphic and logo design, user experience design and development, user interface expertise, music composition, recording and production.
               </p>
              <p className="my-3 text-neutral-800 dark:text-neutral-200">
              Melkonian Industries has partnered with many clients, including D\CAL, Onu One, Optum, Dewpoint, Delta Dental of Michigan, ArtPrize, Jaroof and many more.
              </p>
          </div>

      </main>

      {/* <Footer /> */}
    </div>
  )
}
