import { useNavigate } from 'react-router-dom';
import { UsersRepository } from '../../../services/repository/repository.users';

export function EraseUserButton() {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    async function handleClick() {
        const usersRepository = await new UsersRepository()
            .deleteUser(userId as string)
            .then(() => {
                navigate('/');
            });
    }
    return (
        <button onClick={handleClick} className="eraseUser__button">
            Erase User
        </button>
    );
}
