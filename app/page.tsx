import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import ServiceCard from "./components/card/service.card";
import { LuCompass } from "react-icons/lu";

export default function Home() {
  return (
    <div className="max-w-[1920px] min-w-[768px] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 gap-16 mx-auto">
      <Navbar />
      <main className="gap-[32px] row-start-2 items-center sm:items-start w-[100%]">
        <section className="grid sm:grid-flow-row lg:grid-flow-col px-20 py-8 justify-items-center gap-15">
          <div className="text-center lg:text-start content-center justify-center">
            <h1 className="max-w-[65ch] text-6xl font-bold mb-6">Asesoria profesional certificada </h1>
            <h2 className="text-3xl font-medium text-blue-500 mb-6">Mentor en empleabilidad</h2>
            <p className="sm:mx-auto lg:mx-0 lg:text-start text-lg max-w-[65ch] mb-6">Más de X años ayudando a jovenes profesionales a encontrar su camino. Transforma tu carrera con estrategias personalizadas y resultados comprobados.</p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="rounded-full border-2 border-transparent bg-foreground text-background font-medium h-16 px-5 min-w-fit">Agenda tu sesion</button>
              <button className="rounded-full border-2 font-medium h-16 px-5 min-w-fit">Conoce mi historia</button>
            </div>
          </div>
          <Image
            className="rounded-xl min-w-[350px]"
            src="/home.jpg"
            alt="Next.js logo"
            width={450}
            height={30}
            priority
          />
        </section>
        <section className="bg-gray-100 my-20 p-10">
          <h1 className="text-xl font-semibold text-center">Mis Servicios de Mentoría</h1>
          <p className="text-gray-600 text-center max-w-[65ch] mx-auto">Ofrezco un enfoque integral y personalizado para ayudarte en cada etapa de tu desarrollo profesional</p>
          <div className="flex flex-row flex-wrap my-10 gap-[32] justify-center">
            <ServiceCard 
              icon={<LuCompass className="text-blue-600" size={20} />}
              title={"Orientacion Vocacional"} 
              description={"Descubre tu verdadera pasión y encuentra el camino profesional que mejor se adapte a tus talentos y objetivos de vida."} 
              servicesList={["Test de personalidad y aptitudes", "Análisis de fortalezas", "Plan de carrera personalizado", "Identificación de oportunidades"]} 
            />
            <ServiceCard 
              icon={<LuCompass className="text-blue-600" size={20} />}
              title={"Orientacion Vocacional"} 
              description={"Descubre tu verdadera pasión y encuentra el camino profesional que mejor se adapte a tus talentos y objetivos de vida."} 
              servicesList={["Test de personalidad y aptitudes", "Análisis de fortalezas", "Plan de carrera personalizado", "Identificación de oportunidades"]} 
            />
            <ServiceCard 
              icon={<LuCompass className="text-blue-600" size={20} />}
              title={"Orientacion Vocacional"} 
              description={"Descubre tu verdadera pasión y encuentra el camino profesional que mejor se adapte a tus talentos y objetivos de vida."} 
              servicesList={["Test de personalidad y aptitudes", "Análisis de fortalezas", "Plan de carrera personalizado", "Identificación de oportunidades"]} 
            />
          </div>
        </section>
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
