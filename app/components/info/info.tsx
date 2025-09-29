import { LuCheck } from "react-icons/lu";

interface InfoProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

export default function Info(props: InfoProps) {
    return (
        <div className="flex card max-w-[300px] items-center gap-5">
            <i className="w-[50px] h-[50px] py-4 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">{props.icon}</i>
            <div>
                <h1 className="font-semibold text-md">{props.title}</h1>
                <p className="text-sm ">{props.value}</p>
            </div>
        </div>
    )
}