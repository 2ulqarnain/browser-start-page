import './globals.css'
import { Monoton } from 'next/font/google'

const monoton = Monoton({subsets:['latin'],weight:'400',variable:"--font-monoton"})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monoton.variable} dark:text-seagull dark:bg-crow`}>{children}</body>
    </html>
  )
}
