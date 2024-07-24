export default function CreateNewLink() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl text-[#333333]">Customize your links</h1>
                    <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
                </section>
                <section className="flex flex-col gap-6">
                    <button className="px-[27px] py-[11px] border border-[#633CFF] text-[#633CFF] font-semibold rounded-lg">Add new link</button>
                </section>
            </div>
        </div>
    )
}