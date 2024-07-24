export default function Button({ name, type }: { name:string, type: string }) {
    return (
        <button className="bg-[#633CFF] px-[27px] py-[11px] text-white rounded-lg">{ name}</button>
    )
}