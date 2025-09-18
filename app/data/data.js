import { LuBriefcase, LuCompass, LuRocket } from "react-icons/lu"

export const services = [
    {
        icon: <LuCompass className="text-blue-600" size={20} />,
        title: "Orientacion Vocacional",
        description: "Descubre tu verdadera pasión y encuentra el camino profesional que mejor se adapte a tus talentos y objetivos de vida.",
        servicesList: ["Test de personalidad y aptitudes", "Análisis de fortalezas", "Plan de carrera personalizado", "Identificación de oportunidades"],
    },
    {
        icon: <LuBriefcase className="text-blue-600" size={20} />,
        title: "Empleabilidad",
        description: "Mejora tus habilidades para conseguir el trabajo que deseas con estrategias efectivas de búsqueda de empleo.",
        servicesList: ["Optimización de CV y LinkedIn", "Preparación para entrevistas", "Networking estratégico", "Marca personal profesional"],
    },
    {
        icon: <LuRocket className="text-blue-600" size={20} />,
        title: "Desarrollo Profesional",
        description: "Acelera tu crecimiento profesional y alcanza tus metas de carrera con un plan estratégico personalizado.",
        servicesList: ["Planificación de carrera", "Desarrollo de liderazgo", "Gestión del tiempo", "Negociación salarial"],
    }
]

export const clientsComments = [
    {
        image: "",
        name: "Pedro Perez",
        comment: "Gracias a la mentoría recibida, logré conseguir el trabajo de mis sueños en solo 3 meses. La orientación fue clave para enfocar mi búsqueda y mejorar mis habilidades de entrevista.",
        rating: 5,
    },
    {
        image: "",
        name: "Roberto Rodriguez",
        comment: "La mentoría me permitió negociar un aumento del 40% y obtener una promoción que había estado buscando durante años. Excelente inversión en mi futuro.",
        rating: 5,
    },
    {
        image: "",
        name: "Laura Lopez",
        comment: "La mentoría me ayudó a identificar mis fortalezas y a desarrollar un plan de carrera claro. Ahora tengo la confianza necesaria para liderar proyectos importantes.",
        rating: 5,
    },
]