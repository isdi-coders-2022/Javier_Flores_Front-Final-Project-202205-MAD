import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../../app/store';
import { iUserItems } from '../../../interfaces/interfaces';
import { modifySuitcaseAction } from '../../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../../services/repository/repository.suitcases';

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
                items: [addQuantityAndCheck as unknown as iUserItems],
            })
        );
        const addItemsToSuitcase =
            await new SuitcasesRepository().updateSuitcase(
                { items: addQuantityAndCheck as any },
                userSuitcase._id as string
            );
    }

    return (
        <>
            <br />
            <br />
            <button className="btn btn-success" onClick={handleClick}>
                Add
            </button>
        </>
    );
}
