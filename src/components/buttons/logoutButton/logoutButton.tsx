import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './logoutButton.css';
export function LogoutButton() {
    const navigate = useNavigate();
    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <button onClick={handleClick} className="header__button">
                Logout
            </button>
        </>
    );
}
