import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import ServiceCard from "./components/card/service.card";
import { LuAward, LuCheck, LuGraduationCap, LuLinkedin, LuMail, LuPhone } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import CommentCard from "./components/card/commet.card";
import { services, clientsComments } from './data/data'
import Info from "./components/info/info";
import ContactForm from "./components/form/contact.form";

export default function Home() {
  return (
    <div className="max-w-[1920px] min-w-[768px] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen py-8 gap-16 mx-auto">
      <Navbar />
      <main className="gap-[32px] row-start-2 items-center sm:items-start w-[100%]">
        <section className="grid sm:grid-flow-row lg:grid-flow-col px-20 py-8 justify-items-center gap-15">
          <div className="text-center lg:text-start content-center justify-center">
            <h1 className="max-w-[65ch] text-5xl font-bold mb-6">Asesoria profesional certificada </h1>
            <h2 className="text-3xl font-medium text-blue-600 mb-6">Mentor en empleabilidad</h2>
            <p className="sm:mx-auto lg:mx-0 lg:text-start text-lg max-w-[65ch] mb-6">Más de X años ayudando a jovenes profesionales a encontrar su camino. Transforma tu carrera con estrategias personalizadas y resultados comprobados.</p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="rounded-full border-2 border-transparent bg-foreground text-background font-medium h-12 px-5 min-w-fit cursor-pointer">Agenda tu sesion</button>
              <button className="rounded-full border-2 font-medium h-12 px-5 min-w-fit cursor-pointer">Conoce mi historia</button>
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
        <section className="bg-gray-100 my-10 p-12" id="services">
          <h1 className="text-2xl font-bold text-center">Mis Servicios de Mentoría</h1>
          <p className="text-gray-600 text-center max-w-[65ch] mx-auto">Ofrezco un enfoque integral y personalizado para ayudarte en cada etapa de tu desarrollo profesional</p>
          <div className="flex flex-row flex-wrap mt-10 gap-[32] justify-center">
            {
              services.map((service, idx) => {
                return (
                  <ServiceCard
                    key={idx}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    servicesList={service.servicesList}
                  />
                )
              })
            }
          </div>
        </section>
        <section className="grid sm:grid-flow-row lg:grid-flow-col px-20 py-4 justify-items-center gap-15" id="about-me">
          <div className="text-center lg:text-start content-center justify-center">
            <h2 className="max-w-[65ch] text-2xl font-bold mb-6">Sobre m&iacute;</h2>
            <p className="sm:mx-auto lg:mx-0 text-start text-md max-w-[65ch] mb-6 text-gray-600">
              Soy un mentor profesional especializado en ayudar a personas como tú a descubrir su verdadero potencial y construir carreras exitosas y satisfactorias.
            </p>
            <p className="sm:mx-auto lg:mx-0 text-start text-md max-w-[65ch] mb-6 text-gray-600">
              Con más de 15 años de experiencia en recursos humanos y desarrollo profesional, he tenido el privilegio de guiar a cientos de profesionales hacia el éxito en sus carreras.
            </p>
            <ul className="grid gap-2 text-gray-600">
              <li className="flex gap-3 items-center">
                <LuAward size={20} className="text-blu<p>e-600" />
                <p className="text-sm">Certificado en Coaching Profesional</p>
              </li>
              <li className="flex gap-3 items-center">
                <LuGraduationCap size={20} className="<p>text-blue-600" />
                <p className="text-sm">MBA en Gestión de Recursos Humanos</p>
              </li>
              <li className="flex gap-3 items-center">
                <RiTeamLine size={20} className="text-<p>blue-600" />
                <p className="text-sm">MBA en Gestión de Recursos Humanos</p>
              </li>
            </ul>
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
        <section className="bg-gray-100 my-10 p-12" id="comments">
          <h1 className="text-2xl font-bold text-center">Lo que dicen mis clientes</h1>
          <p className="text-gray-600 text-center max-w-[65ch] mx-auto">
            Historias reales de profesionales que han transformado sus carreras con mi mentoría
          </p>
          <div className="flex flex-row flex-wrap mt-10 gap-[32] justify-center">
            {
              clientsComments.map((item, idx) => {
                return (
                  <CommentCard
                    key={idx}
                    image={item.image}
                    name={item.name}
                    comment={item.comment}
                    rating={item.rating}
                  />
                )
              })
            }
          </div>
        </section>
        <section id="contact">
          <h1 className="text-2xl font-bold text-center">¿Listo para transformar tu carrera?</h1>
          <p className="text-gray-600 text-center max-w-[65ch] mx-auto">
            Agenda tu consulta gratuita de 30 minutos y descubre cómo puedo ayudarte a alcanzar tus objetivos profesionales
          </p>
          <div className="grid sm:grid-flow-row lg:grid-flow-col px-20 py-8 justify-items-center gap-15 mt-10">
            <div className="w-full max-w-[650px]">
              <h2 className="max-w-[65ch] text-lg font-bold mb-6">Informaci&oacute;n de contacto</h2>
              <div className="flex flex-col gap-5">
                <Info icon={<LuMail />} title={"Email"} value={"example@gmail.com"} />
                <Info icon={<LuPhone />} title={"Teléfono"} value={"+12 0120 223 293"} />
                <Info icon={<LuLinkedin />} title={"LinkedIn"} value={"@usuario"} />
                <div className="w-full bg-blue-50 rounded-sm p-3 mt-8">
                  <h3 className="text-sm font-bold">Consula gratuita de 30 minutos</h3>
                  <p className="text-sm my-3">En nuestra primera sesión gratuita podremos:</p>
                  <ul>
                    <li className="flex gap-3 items-center">
                      <LuCheck className="text-green-600" />
                      <p className="text-sm">Analizar tu situación actual</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <LuCheck className="text-green-600" />
                      <p className="text-sm">Identificar tus objetivos</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <LuCheck className="text-green-600" />
                      <p className="text-sm">Crear un plan de acción</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[650px]">
              <ContactForm />
            </div>
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
