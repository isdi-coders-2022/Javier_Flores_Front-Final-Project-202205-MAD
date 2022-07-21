import { EraseUserButton } from '../buttons/eraseUserButton/eraseUserButton';
import { GoToCheckListButton } from '../buttons/goToChecklistButton/goToChecklistButton';
import { LogoutButton } from '../buttons/logoutButton/logoutButton';
import './headerMenu.css';

export function HeaderMenu() {
    return (
        <header className="headerMenu">
            <div className="btn-group">
                <GoToCheckListButton></GoToCheckListButton>
                <LogoutButton></LogoutButton>
                <EraseUserButton></EraseUserButton>
            </div>
        </header>
    );
}
