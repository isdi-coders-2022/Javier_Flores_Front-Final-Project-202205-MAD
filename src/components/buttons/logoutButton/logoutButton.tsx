import { Link } from 'react-router-dom';

export function LogoutButton() {
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
    return (
        <>
            <Link to="/">
                <button className="logoutButton">Logout</button>
            </Link>
            ;
        </>
    );
}
