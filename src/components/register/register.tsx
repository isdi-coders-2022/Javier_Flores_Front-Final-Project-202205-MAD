import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersRepository } from '../../services/repository/repository.users';
import './register.css';
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
            <div className="div__register">
                <form className="form__register" onSubmit={handleSubmit}>
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
                    <div className="div__form">
                        <button className="button__register" type="submit">
                            Create
                        </button>
                        <Link to="/">
                            <button>Back to login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
    return template;
}
