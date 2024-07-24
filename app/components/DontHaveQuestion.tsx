import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";

export default function DontHaveQuestion({ question, linkText, linkPath }: { question: string, linkText: string, linkPath: string }) {
    // const path = usePathname()
    return (
        <div className="text-[#737373] flex flex-col items-center justify-center gap-1">
            <p>{question}</p>
            <Link href={linkPath} className="text-[#633CFF]">{linkText}</Link>
        </div>
    )
}