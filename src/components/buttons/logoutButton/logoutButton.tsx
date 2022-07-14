import { Link } from 'react-router-dom';

export function LogoutButton() {
    return (
        <>
            <Link to="/register">
                <button className="logoutButton">Logout</button>
            </Link>
            ;
        </>
    );
}
