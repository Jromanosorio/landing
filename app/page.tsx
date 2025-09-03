import Image from "next/image";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <div className="max-w-[1200px] min-w-[768px] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 mx-auto">
      <Navbar/>
      <main className="flex gap-[32px] row-start-2 items-center sm:items-start w-[100%] ">
        <div className="flex flex-row gap-8 flex-wrap lg:flex-nowrap">
          <div className="text-center lg:text-start content-center">
            <h1 className="max-w-[65ch] text-6xl font-bold mb-6">Asesoria profesional certificada </h1>
            <h2 className="text-3xl font-medium text-blue-500 mb-6">Mentor en empleabilidad</h2>
            <p className="mx-auto lg:text-start text-lg max-w-[65ch] mb-6">Más de X años ayudando a jovenes profesionales a encontrar su camino. Transforma tu carrera con estrategias personalizadas y resultados comprobados.</p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="rounded-full border-2 border-transparent bg-foreground text-background font-medium h-16 px-5 min-w-fit">Agenda tu sesion</button>
              <button className="rounded-full border-2 font-medium h-16 px-5 min-w-fit">Conoce mi historia</button>
            </div>
          </div>
            <Image
              className="dark:invert rounded-xl mx-auto"
              src="/home.jpg"
              alt="Next.js logo"
              width={450}
              height={30}
              priority
            />
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
