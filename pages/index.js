import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Melkonian Industries</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ledger&family=Nixie+One&display=swap" rel="stylesheet" />
      </Head>
      <main className='container mt-5'>
        <div className="row">
          <div className='col-lg-12 mb-3'>
            <h1 className="text-3xl">Melkonian Industries</h1>
            <h2 className='home-h2'>Professional Services based around innovative software development and a commitment to client satisfaction.</h2>
          </div>
          <div className='col-lg-3 d-flex flex-column brand-patch'>
            <div className='row'>
              <div className='col-lg-12 brand-icon'>
                <p className='brand-patch-heading col-12 mb-1'>Mi</p>
                <p className='brand-patch-para mb-0 col-12'>melkonian industries</p>
                <p className='brand-patch-para mb-0 col-12'>100% digital</p>
                <p className='brand-patch-para mb-0 col-12 mb-1 smaller'>est. 2022</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9 brand-content p-4">
              <p className="">
                We fit the solution to achieve your goals. Our engagements are based on learning about you, as our client, so we can support your organization's quest for effectiveness, efficiency, and innovation.
              </p>
              <p className="">
                Our offerings include software consulting, software development, graphic and logo design, user experience design and development, user interface expertise, music composition, recording and production.
               </p>
              <p className='home-p-end'>
              Melkonian Industries has partnered with many clients, including D\CAL, Onu One, Optum, Dewpoint, Delta Dental of Michigan, ArtPrize, Jaroof and many more.
              </p>
          </div>
        </div>
      </main>
    </div>
  )
}
