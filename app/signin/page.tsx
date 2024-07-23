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
                    <label htmlFor="email">Email address</label>
                <input className="px-4 py-3" type="email" name="" id="" />
                </section>
                <section className="flex flex-col gap-3">
                    <label htmlFor="email">Password</label>
                <input type="email" name="" id="" />
                </section>
                <button>Login</button>
            </div>
        </section>
    </div>
}