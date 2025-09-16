import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="flex gap-[24px] items-center justify-between w-[100%] px-8">
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <ul className="flex gap-[24px]">
                <a href="">Servicios</a>
                <a href="">Sobre mi</a>
                <a href="">Testimonios</a>
                <a href="">Contacto</a>
            </ul>
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">Agenda tu sesion</button>
        </nav>
    )
}