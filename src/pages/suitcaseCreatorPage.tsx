import { EraseUserButton } from '../components/buttons/eraseUserButton/eraseUserButton';
import { GoToCheckListButton } from '../components/buttons/goToChecklistButton/goToChecklistButton';
import { LogoutButton } from '../components/buttons/logoutButton/logoutButton';
import { ChooseDestination } from '../components/chooseDestination/chooseDestination';
import { WeightSuitcase } from '../components/weightSuitcase/weightSuitcase';
import { Filler } from './fillerPage';

export function SuitcaseCreator() {
    return (
        <div className="SuitcaseCreator">
            <LogoutButton></LogoutButton>
            <EraseUserButton></EraseUserButton>
            <GoToCheckListButton></GoToCheckListButton>
            <h1>SuitcaseCreator</h1>
            <WeightSuitcase></WeightSuitcase>
            <ChooseDestination></ChooseDestination>
            <Filler></Filler>
        </div>
    );
}
