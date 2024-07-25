import { Icon } from "@iconify/react/dist/iconify.js";

export default function LinkPlatform() {
    return (
        <div className="flex flex-col gap-1">
             <label htmlFor="" className="text-[#333333] text-xs ">Platform</label>
                <div className="bg-white px-4 py-3 flex items-center gap-3 border border-[#D9D9D9] rounded-lg">
                    <Icon icon="fa6-brands:github" />
                    <p className="w-full">GitHub</p>
                    <Icon icon="mdi:chevron-down" color="#633CFF"/>
            </div>
        </div>
    )
}