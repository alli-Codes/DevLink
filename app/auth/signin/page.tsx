'use client'
import { useState } from "react"
import Button from "@/app/components/Button"
import DontHaveQuestion from "@/app/components/DontHaveQuestion"
import Input from "@/app/components/Input"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = function (value: string) {
        setEmail(value)
        console.log(email)
    }
    return <div className="flex flex-col gap-16">
        <section>Devlink</section>
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-[#333333]">Login</h1>
                <p className="text-[#737373] ">Add your details below to get back into the app</p>
            </div>

            <div className="flex flex-col gap-6">
                    <Input type="email" placeholder="e.g. alex@email.com" label="Email address" showLabel={true} />
                    <Input type="email" placeholder="Enter your password" label="Password" showLabel={true} />
                <Button name="Login" type="login" />
                <DontHaveQuestion question="Don't have an account?" linkText="Create account" linkPath="/signup" />
            </div>
        </section>
    </div>
}