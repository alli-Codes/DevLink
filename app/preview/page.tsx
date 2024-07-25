import LinkHolder from "../components/LinkHolder";
import ProfilePicture from "../components/ProfilePicture";

export default function Preview() {
    return (
        <div className="w-[237px] flex flex-col gap-14">
            <section className="flex flex-col items-center gap-[25px]">
                <ProfilePicture />
                <h1 className="font-bold text-[32px] text-[#333333]">Evans Allison</h1>
                <p className="text-[#737373]">allisonevans081@gmail.com</p>
            </section>
            <section className="flex flex-col gap-5">
                <LinkHolder />
                <LinkHolder />
                <LinkHolder />
            </section>
        </div>
    )
}