import { Link, useNavigate } from 'react-router-dom';

export function NewUserButton() {
    return (
        <div className="NewUserButton">
            <Link to="/register">
                <button>New User</button>
            </Link>
        </div>
    );
}
