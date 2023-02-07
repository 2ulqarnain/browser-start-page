import Head from 'next/head'
import Clock from '../components/clockComp/Clock'
import {Sacramento} from "@next/font/google"

const font =  Sacramento({
  subsets: ["latin"],
  weight:"400"
});

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="home page for browsers" />
      </Head>
      <main className='w-full h-full font-ware gap-y-10 flex flex-col justify-center items-center'>
        <Clock/>
      </main>
    </div>
  )
}
