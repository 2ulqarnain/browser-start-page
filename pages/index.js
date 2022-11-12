import Head from 'next/head'
import Clock from '../components/clockComp/Clock'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="home page for browsers" />
      </Head>

      <main className='w-full h-full font-ware gap-y-10 flex flex-col justify-center items-center'>
        <Clock/>
        <div>
          <h4 className='text-5xl text-zinc-800 mynamehover'>Zulqarnain Haider</h4>
        </div>
      </main>

    </div>
  )
}
