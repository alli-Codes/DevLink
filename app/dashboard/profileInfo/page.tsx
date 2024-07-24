import Button from "@/app/components/Button";
import ProfileNameEdit from "@/app/components/ProfileNameEdit";
import ProfilePictureUpload from "@/app/components/ProfilePictureUpload";

export default function ProfileInfo() {
    return (
        <div className="bg-white p-6 rounded-xl">
            <div className="flex flex-col gap-10">
                <section className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl text-[#333333]">Profile Details</h1>
                    <p className="text-[#737373]">Add your details to create a personal touch to your profile.</p>
                </section>
                <section className="flex flex-col gap-6">
                    <ProfilePictureUpload />
                    <ProfileNameEdit />
                    <div className="py-4 border-t border-[#D9D9D9]">
                        <Button name="Save" type="save"/>
                    </div>
                </section>
            </div>
        </div>
    )
}