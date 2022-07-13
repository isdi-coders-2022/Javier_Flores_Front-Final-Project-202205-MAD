import { ChooseDestination } from '../components/chooseDestination/chooseDestination';
import { WeightSuitcase } from '../components/weightSuitcase/weightSuitcase';

export function SuitcaseCreator() {
    return (
        <div className="SuitcaseCreator">
            <h1>SuitcaseCreator</h1>
            <WeightSuitcase></WeightSuitcase>
            <ChooseDestination></ChooseDestination>
        </div>
    );
}
