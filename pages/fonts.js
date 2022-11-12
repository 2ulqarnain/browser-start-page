import Head from 'next/head'
import { fonts } from '../utils/utils'

export default function Home() {
  return (
    <div className='w-screen h-screen'>
      <main className='w-full h-full flex justify-center items-center text-4xl'>
        <ul>
            {
              fonts.map((fontname,i)=>
              <li className='my-3'>
                <span className='mr-16 font-mono text-zinc-500'>{i}</span>
                <span className='mr-16' style={{fontFamily:fontname}}>thequickbrown</span>
                <span className='text-zinc-600'>{fontname}</span>
              </li>
              )
            }
        </ul>
      </main>
    </div>
  )
}
