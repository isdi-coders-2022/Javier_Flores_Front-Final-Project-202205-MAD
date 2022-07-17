import { LogoutButton } from '../components/buttons/logoutButton/logoutButton';
import { ChooseDestination } from '../components/chooseDestination/chooseDestination';
import { WeightSuitcase } from '../components/weightSuitcase/weightSuitcase';
import { Filler } from './fillerPage';

export function SuitcaseCreator() {
    return (
        <div className="SuitcaseCreator">
            <LogoutButton></LogoutButton>
            <h1>SuitcaseCreator</h1>
            <WeightSuitcase></WeightSuitcase>
            <ChooseDestination></ChooseDestination>
            <Filler></Filler>
        </div>
    );
}
