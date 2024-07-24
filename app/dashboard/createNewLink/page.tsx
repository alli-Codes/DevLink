import Button from "@/app/components/Button";
import GetStarted from "@/app/components/GetStarted";
import LinkContainer from "@/app/components/LinkContainer";

export default function CreateNewLink() {
    return (
        <div className="bg-white p-6 rounded-xl">
            <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl text-[#333333]">Customize your links</h1>
                    <p className="text-[#737373]">Add/edit/remove links below and then share all your profiles with the world!</p>
                </section>
                <section className="flex flex-col gap-6">
                    <button className="px-[27px] py-[11px] border border-[#633CFF] text-[#633CFF] font-semibold rounded-lg">Add new link</button>
                    {/* <GetStarted /> */}
                    <LinkContainer />
                    <LinkContainer />
                    <div className="py-4 border-t border-[#D9D9D9]">
                        <Button name="Save" type="save"/>
                    </div>
                </section>
            </div>
        </div>
    )
}