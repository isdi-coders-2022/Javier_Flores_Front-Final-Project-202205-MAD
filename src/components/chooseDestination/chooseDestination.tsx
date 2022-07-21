import { clearConfigCache } from 'prettier';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iState } from '../../app/store';
import { modifySuitcaseAction } from '../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';

export function ChooseDestination() {
    const dispatch = useDispatch();
    const [destUser, setDestUser] = useState('');
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    const navigate = useNavigate();

    async function handleChange(ev: SyntheticEvent) {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        const desti = element.value;
        setDestUser((prev) => prev);

        const suitcase = await new SuitcasesRepository().updateSuitcase(
            { destination: desti },
            userSuitcase._id as string
        );
        dispatch(modifySuitcaseAction(suitcase));
        navigate('/filler');
    }

    return (
        <>
            <div className="input-group mb-3">
                <select
                    className="form-select"
                    value={destUser}
                    onChange={handleChange}
                >
                    <option>Pick a Destination</option>
                    <option value="beach">Beach</option>
                    <option value="campsite">Campsite</option>
                    <option value="rainy">Rainy</option>
                    <option value="mountain">Mountain</option>
                </select>
            </div>
        </>
    );
}
