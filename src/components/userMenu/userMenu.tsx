import { DeleteUserButton } from '../buttons/deleteUserButton/deleteUserButton';
import { ListSuitcasesButton } from '../buttons/listSuitcasesButton/listSuitcasesButton';
import { LogoutButton } from '../buttons/logoutButton/logoutButton';

export function UserMenu() {
    return (
        <div className="UserMenu">
            <h1>UserMenu</h1>
            <ListSuitcasesButton></ListSuitcasesButton>
            <LogoutButton></LogoutButton>
            <DeleteUserButton></DeleteUserButton>
        </div>
    );
}
