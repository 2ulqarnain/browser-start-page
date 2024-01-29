import type { Viewport } from 'next'

export const viewport: Viewport = {
    themeColor: 'white',
}

export default function Home() {

    const timeNow = new Date()
        .toLocaleTimeString("en-us",{
            hour:"numeric",
            minute:"numeric",
            hour12:false
        })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black text-3xl font-trochut">
      <div className={"text-center p-2 rounded-2xl"}>
          <p>Zulqarnain Haider</p>
          <p className={"text-8xl"}>{timeNow}</p>
      </div>
    </main>
  );
}