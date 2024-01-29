import './globals.css'
import {Elsie, Satisfy, Trochut} from 'next/font/google'

const elsie=Elsie({subsets:['latin'],weight:'400',variable:"--font-elsie"})
const trochut=Trochut({subsets:['latin'],weight:'400',variable:"--font-trochut"})
const satisfy = Satisfy({subsets:['latin'],weight:'400',variable:"--font-satisfy"})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${satisfy.variable} ${elsie.variable} ${trochut.variable} dark:text-seagull dark:bg-crow`}>{children}</body>
    </html>
  )
}