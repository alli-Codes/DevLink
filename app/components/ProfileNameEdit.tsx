import Input from "./Input";

export default function ProfileNameEdit() {
    return (
        <div className="bg-[#FAFAFA] p-5 flex flex-col gap-3 rounded-xl">
            <Input type="firstName" placeholder="First Name" label="First Name" showLabel={true} />
            <Input type="lastName" placeholder="Last Name" label="Last Name" showLabel={true} />
            <Input type="email" placeholder="Email" label="Email" showLabel={true} />
        </div>
    )
}