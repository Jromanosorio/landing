import { LuCheck } from "react-icons/lu";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    servicesList: string[];
}

export default function ServiceCard(props: ServiceCardProps) {
    return (
        <div className="card max-w-[300px] p-6 rounded-xl bg-white shadow-xl">
            <i className="w-[50px] h-[50px] py-4 rounded-full flex items-center justify-center bg-blue-100">{props.icon}</i>
            <div className="mt-3">
                <h1 className="font-bold my-2">{props.title}</h1>
                <p className="text-sm max-w-[65ch] my-4 text-gray-600">{props.description}</p>
                <ul>
                    {
                        props.servicesList.map((item, idx) => {
                            return (
                                <li key={idx} className="text-[12px] text-gray-600 my-1 flex items-center gap-3">
                                    <LuCheck className="text-green-600" />
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}