import { ChooseDestination } from '../components/chooseDestination/chooseDestination';
import { HeaderMenu } from '../components/headerMenu/headerMenu';
import { WeightSuitcase } from '../components/weightSuitcase/weightSuitcase';

export function SuitcaseCreator() {
    return (
        <>
            <HeaderMenu></HeaderMenu>

            <main>
                <WeightSuitcase></WeightSuitcase>
                <ChooseDestination></ChooseDestination>
            </main>
        </>
    );
}
