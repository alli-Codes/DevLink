import { Icon } from "@iconify/react/dist/iconify.js";

export default function LinkInput() {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[#333333] text-xs ">Link</label>
            {/* <div> */}
            <div className="bg-white w-full px-4 py-3 flex items-center border border-[#D9D9D9] rounded-lg">
                <Icon icon="ph:link-bold" />
                <input type="text" />
            </div>
            {/* </div> */}
        </div>
    )
}