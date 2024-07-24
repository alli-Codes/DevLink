import Image from "next/image"
import LinkIcon from "./LinkIcon"
import ProfileIcon from "./ProfileIcon"
import EyeIcon from "./EyeIcon"

export default function Header() {
    return (
        <header className="bg-white py-4 px-6 flex items-center justify-between sticky top-0">
            <Image  src="/logo.png" width={26} height={26} alt="" />
            <div className="flex gap-2">
                <LinkIcon />
                <ProfileIcon />
            </div>
            <EyeIcon />
        </header>
    )
}