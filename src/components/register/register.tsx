import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersRepository } from '../../services/repository/repository.users';
import './register.css';
export function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const registerUser = await new UsersRepository().registerUser(formData);
        console.log(registerUser);
        if (registerUser.name) {
            navigate('/');
        }
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    const template = (
        <>
            <div className="card">
                <form className="form__register" onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="div__form">
                        <button className="btn btn-primary" type="submit">
                            Create
                        </button>
                    </div>
                </form>
                <Link to="/">
                    <p>Back to login</p>
                </Link>
            </div>
        </>
    );
    return template;
}
