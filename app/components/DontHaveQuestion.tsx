import Link from "next/link";

export default function DontHaveQuestion({question, link}: {question: string, link: string}) {
    return (
        <div className="text-[#737373] flex flex-col items-center justify-center gap-1">
            <p>{question}</p>
            <Link href={link} className="text-[#633CFF]">{link}</Link>
        </div>
    )
}