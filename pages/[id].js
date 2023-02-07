import Head from 'next/head'
import Clock from '../components/clockComp/Clock'
import {Sacramento} from "@next/font/google"

const font =  Sacramento({
  subsets: ["latin"],
  weight:"400"
});

export default function Home({id}) {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>{id.toUpperCase()}</title>
        <meta name="description" content="fancy home page for modern browsers with clock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full h-full font-ware gap-y-10 flex flex-col justify-center items-center'>
        <Clock/>
        <div>
          <h4 className={`text-transparent p-2 text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 ${font.className}`}>
            {id}
          </h4>
        </div>
      </main>
    </div>
  )
}

// server side props for next js function
export async function getServerSideProps(context) {
  // get the id from the router query
  const { id } = context.query
  return {
    props: {
      id
    }, // will be passed to the page component as props
  }
}