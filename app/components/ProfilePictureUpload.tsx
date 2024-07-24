export default function ProfilePictureUpload() {
    return (
        <div className="bg-[#FAFAFA] p-5 flex flex-col gap-3 rounded-xl">
            <p className="text-[#737373]">Profile picture</p>
            <div className="bg-[#EFEBFF] h-[12.0625rem] w-[12.0625rem] rounded-xl">

            </div>
            <p className="text-[#737373] text-xs">Image must be below 1024x1024px. Use PNG or JPG format.</p>
        </div>
    )
}