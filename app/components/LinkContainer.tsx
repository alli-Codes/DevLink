import LinkInput from "./LinkInput";
import LinkPlatform from "./LinkPlatform";

export default function LinkContainer() {
    return (
        <div className="bg-[#FAFAFA] flex flex-col items-enter px-5 py-5 gap-6 rounded-xl">
            <section className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                        <span className="bg-[#737373] w-3 h-[1px]"></span>
                        <span className="bg-[#737373] w-3 h-[1px]"></span>
                    </div>
                    <h1 className="text-[#737373] font-bold">Link #1</h1>
                </div>
                <button className="text-[#737373]">Remove</button>
            </section>
                <LinkPlatform />
                <LinkInput />
        </div>
    )
}