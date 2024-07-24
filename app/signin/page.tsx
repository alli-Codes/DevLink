import Button from "../components/Button"
import DontHaveQuestion from "../components/DontHaveQuestion"
import Input from "../components/Input"
import InputLabel from "../components/InputLabel"

export default function SignIn() {
    return <div className="h-screen flex flex-col">
        <section>Devlink</section>
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
                <h1>Login</h1>
                <p>Add your details below to get back into the app</p>
            </div>

            <div className="flex flex-col gap-6">
                    <Input type="email" placeholder="e.g. alex@email.com" label="Email address" showLabel={true} />
                    <Input type="email" placeholder="e.g. alex@email.com" label="Password" showLabel={true} />
                <Button name="Login" type="login" />
                <DontHaveQuestion question="Don't have an account?" link="Create account" />
            </div>
        </section>
    </div>
}