import Time from "@/components/time";

export default function Home() {

  const tailwindColors = [
    'text-gray-400',
    'text-red-400',
    'text-orange-400',
    'text-yellow-400',
    'text-green-400',
    'text-teal-400',
    'text-blue-400',
    'text-indigo-400',
    'text-purple-400',
    'text-pink-400'
  ];

  const primaryColorClass=tailwindColors[Math.floor(Math.random()*10)];
  const secondaryColorClass=tailwindColors[Math.floor(Math.random()*10)];
  console.log(primaryColorClass,secondaryColorClass)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Time primaryColorClass={primaryColorClass} secondaryColorClass={secondaryColorClass}/>
    </main>
  );
}
