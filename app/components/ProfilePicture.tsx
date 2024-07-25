import Image from "next/image";

export default function ProfilePicture() {
    return (
        <div className="h-[104px] w-[104px] border-4 border-[#633CFF] overflow-hidden rounded-full">
            <img src="/profile-pic.jpeg" className="h-full w-full object-cover object-center" alt=""/>
        </div>
    )
}