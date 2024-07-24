import Image from "next/image";

export default function GetStarted() {
    return (
        <div className="bg-[#FAFAFA] flex flex-col items-enter px-5 py-10 gap-6 rounded-xl">
            <div className="self-center object-contain">
                <Image src={"/getstarted.png"} alt="" width={100} height={100} />
            </div>
            <h1 className="text-[#333333] font-bold text-2xl">Let’s get you started</h1>
            <p className="text-[#737373]">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
        </div>
    )
}