export default function Input({ type, placeholder, label, showLabel }: { type: string, placeholder: string, label: string, showLabel: boolean }) {
    return (
        <div className="flex flex-col gap-1">
            {showLabel ? <label htmlFor="" className="text-[#333333] text-xs ">{ label }</label> : undefined}
            <input className="px-4 py-3 border border-[#D9D9D9] rounded-lg" type={type} placeholder={placeholder} name="" id="" />
        </div>
    )
}