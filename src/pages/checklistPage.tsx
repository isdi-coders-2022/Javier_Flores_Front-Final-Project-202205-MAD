import { GoToCreateSuitcaseButton } from '../components/buttons/goToCreateSuitcaseButton/goToCreateSuitcaseButton';
import { LogoutButton } from '../components/buttons/logoutButton/logoutButton';
import { CheckList } from '../components/checklist/checkList';

export function ChecklistPage() {
    return (
        <div className="ChecklistPage">
            <header>
                <GoToCreateSuitcaseButton></GoToCreateSuitcaseButton>
                <LogoutButton></LogoutButton>
            </header>
            <h1>Checklist</h1>
            <CheckList></CheckList>
        </div>
    );
}
