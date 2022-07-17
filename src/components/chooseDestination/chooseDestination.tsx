import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import { modifySuitcaseAction } from '../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';

export function ChooseDestination() {
    //Do a select with the destinations
    const dispatch = useDispatch();
    const [destination, setDestination] = useState('');
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();

        const suitcase = await new SuitcasesRepository().updateSuitcase(
            { destination: destination },
            userSuitcase._id as string
        );
        console.log(userSuitcase._id);
        dispatch(modifySuitcaseAction(suitcase));
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setDestination(element.value);
    }

    return (
        <>
            <div className="ChooseDestination">
                <label>
                    Add Destination
                    <select value={destination} onChange={handleChange}>
                        <option value="beach">Beach</option>
                        <option value="campsite">Campsite</option>
                        <option value="rainy">Rainy</option>
                        <option value="mountain">Mountain</option>
                    </select>
                    <button onClick={handleSubmit}>Go</button>
                </label>
            </div>
        </>
    );
}
