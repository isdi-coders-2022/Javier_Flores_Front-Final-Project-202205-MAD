export function Register() {
    return (
        <div className="Register">
            <h1>Register</h1>
            <form>
                <label>
                    Username: <input type="text" />
                </label>
                <label>
                    Email:
                    <input type="email" />
                </label>
                <label>
                    Password:
                    <input type="password" />
                </label>
                <label>
                    Repeat password:
                    <input type="password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
