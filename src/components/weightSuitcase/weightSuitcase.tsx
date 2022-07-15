import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import {
    createSuitcaseAction,
    loadSuitcaseAction,
} from '../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';

export function WeightSuitcase() {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('userId');
    const newSuitcase: iSuitcase = {
        limitWeight: 0,
        destination: 'beach',
        owner: userId as string,
        isWeightOk: true,
    };
    const saveSuitcase = dispatch(createSuitcaseAction(newSuitcase));
    console.log(saveSuitcase);
    const addWeight = useSelector((store: iState) => store.userSuitcase);
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();

        const addedWeight = await new SuitcasesRepository().addSuitcase(
            newSuitcase
        );
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    return (
        <div className="WeightSuitcase">
            <form onSubmit={handleSubmit}>
                <p className="form__input">Limit weight</p>
                <input
                    className="input"
                    type="number"
                    name="limitWeight"
                    value={newSuitcase.limitWeight}
                    onChange={handleChange}
                    required
                />
            </form>
        </div>
    );
}
