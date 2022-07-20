import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../../app/store';
import { deleteAllItemInSuitcaseAction } from '../../../reducers/itemsInSuitcase.reducer/action.creator';

export function EraseList() {
    const dispatch = useDispatch();
    const itemsSaved = useSelector((store: iState) => store.itemsInSuitcase);
    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        dispatch(deleteAllItemInSuitcaseAction());
        console.log(itemsSaved);
    }
    return (
        <button className="btn btn-outline-dark" onClick={handleClick}>
            Delete
        </button>
    );
}
