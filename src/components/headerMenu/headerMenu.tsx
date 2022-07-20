import { useNavigate } from 'react-router-dom';
import { EraseUserButton } from '../buttons/eraseUserButton/eraseUserButton';
import { GoToCheckListButton } from '../buttons/goToChecklistButton/goToChecklistButton';
import { LogoutButton } from '../buttons/logoutButton/logoutButton';

export function HeaderMenu() {
    return (
        <header className="headerMenu">
            <div className="btn-group" role="group">
                <GoToCheckListButton></GoToCheckListButton>
                <LogoutButton></LogoutButton>
                <EraseUserButton></EraseUserButton>
            </div>
        </header>
    );
}
