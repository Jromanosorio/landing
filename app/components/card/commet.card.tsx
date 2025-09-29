import Image from "next/image";
import { LuUser } from "react-icons/lu";

interface CommentCardProps {
    image: string;
    name: string;
    comment: string;
    rating: number;
}

export default function CommentCard(props: CommentCardProps) {
    return (
        <article className="card max-w-[300px] p-6 rounded-xl bg-white shadow-xl">
            <div className="flex gap-3 items-center">
                {
                    props.image 
                    ? <Image className="rounded-full" src={props.image} alt={"profile_image"} width={30} height={30} /> 
                    : <LuUser className="border-2 rounded-full" size={30}/>
                }
                <h1 className="font-bold my-2 text-sm">{props.name}</h1>
            </div>

            <div className="mt-3">
                <p className="text-[13px] max-w-[65ch] my-4 text-gray-600 italic">"{props.comment}"</p>
            </div>
        </article>
    )
}