import { useDispatch } from 'react-redux';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsersRepository } from '../../services/repository/repository.users';
import { loadUserAction } from '../../reducers/users.reducer/action.creator';
import { iUserLogged } from '../../interfaces/interfaces';
import './login.css';
import { NewUserButton } from '../buttons/newUserButton/newUserButton';
export function FormLogin() {
    const navigate = useNavigate();
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

        if (loginUser.token) {
            dispatch(loadUserAction(loginUser));
            localStorage.setItem('token', loginUser.token);
            localStorage.setItem('userId', loginUser.id as string);

            navigate('/newSuitcase');
        }
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    const template = (
        <>
            <div className="div__login">
                <form className="form__login" onSubmit={handleSubmit}>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div>
                        <button className="button__login" type="submit">
                            Enter
                        </button>
                        <NewUserButton></NewUserButton>
                    </div>
                </form>
            </div>
        </>
    );
    return template;
}
export default FormLogin;
