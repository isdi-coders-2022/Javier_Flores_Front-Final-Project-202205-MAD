import { SyntheticEvent, useState } from 'react';
import { UsersRepository } from '../../services/repository/repository.users';

export function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const registerUser = await new UsersRepository().registerUser(formData);
        console.log(registerUser);
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <p className="form__input">Name</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <p className="form__input">Email</p>
                <input
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p className="form__input">Password</p>
                <input
                    className="input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="button__register" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
