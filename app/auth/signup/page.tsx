'use client'
// import { useState } from "react"
import Button from "../../components/Button"
import DontHaveQuestion from "../../components/DontHaveQuestion"
import Input from "../../components/Input"
// import InputLabel from "../components/InputLabel"

export default function SignUp() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleEmail = function (value: string) {
    //     setEmail(value)
    //     console.log(email)
    // }
    // validateForm('hey')
    return <div className="flex flex-col gap-16">
        <section>Devlink</section>
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-[#333333]">Create account</h1>
                <p className="text-[#737373] ">Let’s get you started sharing your links!</p>
            </div>

            <div className="flex flex-col gap-6">
                    <Input type="email" placeholder="e.g. alex@email.com" label="Email address" showLabel={true} />
                    <Input type="email" placeholder="Atleast 8 characters" label="Create password" showLabel={true} />
                <Input type="email" placeholder="Atleast 8 characters" label="Confirm password" showLabel={true} />
                <p className="text-[#737373] text-xs">Password must contain at least 8 characters</p>
                <Button name="Create new account" type="signup" />
                <DontHaveQuestion question="Already have an account?" linkText="Login" linkPath="/signin" />
            </div>
        </section>
    </div>
}