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
                <section className="flex flex-col gap-3">
                    <InputLabel label="Email address" />
                    <Input type="email" placeholder="e.g. alex@email.com" />
                </section>
                <section className="flex flex-col gap-3">
                    <InputLabel label="Password" />
                    <Input type="email" placeholder="e.g. alex@email.com" />
                </section>
                <button>Login</button>
            </div>
        </section>
    </div>
}