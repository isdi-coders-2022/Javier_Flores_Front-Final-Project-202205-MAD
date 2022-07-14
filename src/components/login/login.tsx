import { useDispatch } from 'react-redux';
import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsersRepository } from '../../services/repository/repository.users';
import { loadUserAction } from '../../reducers/users.reducer/action.creator';
// import { LocalStorage } from '../../services/localStorage/localStorage';
import { iUserLogged } from '../../interfaces/interfaces';

export function FormLogin() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const loginUser: iUserLogged = await new UsersRepository().loginUser(
            formData
        );
        console.log(loginUser);
        if (loginUser.token) {
            dispatch(loadUserAction(loginUser));
            localStorage.setItem('token', loginUser.token);
            // navegate('/');
        }
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
                    <button className="button__login" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </>
    );
    console.log(dispatch);
    return template;
}
export default FormLogin;
