import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import {
    createSuitcaseAction,
    loadSuitcaseAction,
    modifySuitcaseAction,
} from '../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';

export function WeightSuitcase() {
    const dispatch = useDispatch();
    const [formWeight, setFormWeight] = useState(0);
    const userId = localStorage.getItem('userId');
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    const newSuitcase: iSuitcase = {
        limitWeight: 0,
        destination: 'beach',
        owner: userId as string,
        isWeightOk: true,
    };
    async function handleSuitcase(event: SyntheticEvent) {
        event.preventDefault();
        const suitcase = await new SuitcasesRepository().addSuitcase(
            newSuitcase
        );
        console.log(suitcase);
        dispatch(createSuitcaseAction(suitcase));
    }

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();

        const suitcaseWithWeight =
            await new SuitcasesRepository().updateSuitcase(
                { limitWeight: formWeight },
                userSuitcase._id as string
            );
        console.log(suitcaseWithWeight);
        dispatch(modifySuitcaseAction(suitcaseWithWeight));
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormWeight(element.value);
    }

    return (
        <>
            <button onClick={handleSuitcase}>Add suitcase</button>
            <div className="WeightSuitcase">
                <form onSubmit={handleSubmit}>
                    <p className="form__input">Limit weight</p>
                    <input
                        className="input"
                        type="number"
                        name="limitWeight"
                        value={formWeight}
                        onChange={handleChange}
                        required
                    />
                    <button className="button__weight" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}
