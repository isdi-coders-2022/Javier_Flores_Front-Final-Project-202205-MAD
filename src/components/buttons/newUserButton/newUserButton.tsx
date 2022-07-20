import { Link, useNavigate } from 'react-router-dom';

export function NewUserButton() {
    return (
        <>
            <Link to="/register">
                <button className="btn btn-secondary">New User</button>
            </Link>
        </>
    );
}
