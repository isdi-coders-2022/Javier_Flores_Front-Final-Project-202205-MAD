import { useDispatch } from 'react-redux';
import { SyntheticEvent, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { UsersRepository } from '../../services/repository/repository.users';
import { loadUserAction } from '../../reducers/users.reducer/action.creator';

export function FormLogin() {
    // let navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        token: '',
        user: { id: '', name: '', email: '', password: '', suitcases: [] },
    });

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            token: '',
            user: { ...formData.user, [element.name]: element.value },
        });
    }

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const response = await new UsersRepository().loginUser(formData.user);
        console.log(response);

        if (response.token) {
            console.log(setFormData, 'AYYYYYYYYYYYYYYYYYYY');
            dispatch(loadUserAction(response));
            localStorage.setItem('user', JSON.stringify(response));
            // navigate('/Creator');
        }
    };
    let template = (
        <form onSubmit={handleSubmit}>
            <header className="form__header">
                <p className="form__information">
                    Enter your user name and your password
                </p>
            </header>
            <div className="form__item">
                <input
                    type="text"
                    className="form__input"
                    placeholder="name"
                    aria-label="name"
                    autoFocus
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="form__item">
                <input
                    type="password"
                    className="form__input"
                    placeholder="Password"
                    aria-label="Password"
                    required
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="form__submit">
                Login
            </button>
        </form>
    );
    return template;
}
