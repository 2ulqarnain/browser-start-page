import type { Viewport } from 'next'
import Time from "@/components/time";

export const viewport: Viewport = {
    themeColor: 'white',
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black text-3xl font-trochut">
      <div className={"text-center p-2 rounded-2xl"}>
          <p>Zulqarnain Haider</p>
          <Time/>
      </div>
    </main>
  );
}