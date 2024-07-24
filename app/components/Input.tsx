export default function Input({ type, placeholder }: { type: string, placeholder: string }) {
    return (
            <input className="px-4 py-3 border border-[#D9D9D9] rounded-lg" type={type} placeholder={placeholder} name="" id="" />
    )
}