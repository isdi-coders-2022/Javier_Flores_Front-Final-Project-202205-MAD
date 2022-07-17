import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../../app/store';
import { modifySuitcaseAction } from '../../../reducers/suitcases.reducer/action.creator';

export function AddListButton() {
    const dispatch = useDispatch();
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    const itemsInSuitcase = useSelector(
        (store: iState) => store.itemsInSuitcase
    );
    async function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        const addQuantityAndCheck = itemsInSuitcase.map((item) => {
            return {
                item,
                quantity: 1,
                isChecked: false,
            };
        });

        const addListtoSuitcase = await dispatch(
            modifySuitcaseAction({
                ...userSuitcase,
                items: addQuantityAndCheck,
            })
        );
        console.log(userSuitcase);
    }

    return (
        <div className="AddListButton">
            <button onClick={handleClick}>Add</button>
        </div>
    );
}
