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
        <div>
          <h4 className={`text-transparent p-2 text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 ${font.className}`}>
            zulqarnain haider
          </h4>
        </div>
      </main>

    </div>
  )
}
