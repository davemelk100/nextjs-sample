import Head from 'next/head'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Melkonian Industries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='row'>
          <div className='col-lg-3 brand-patch p-5'>
              <p className='brand-patch-heading'>MI</p>
              <p className='brand-patch-para mb-0'>melkonian industries</p>
              <p className='brand-patch-para mb-0'>100% digital</p>
              <small className='brand-patch-para mb-0 home-small'>est. 2022</small>
            </div>
          <div className="col-lg-9 brand-content p-5">
            <h1 className="font-bold text-3xl font-serif">Melkonian Industries</h1>
            <h2 className='home-h2'>Professional Services based around innovative software development and a 
              commitment to client satisfaction above all else.</h2>
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
      </main>
    </div>
  )
}
