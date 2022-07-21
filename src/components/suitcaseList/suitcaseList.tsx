import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { deleteItemInSuitcaseAction } from '../../reducers/itemsInSuitcase.reducer/action.creator';
import { AddListButton } from '../buttons/AddListButton/addListButton';
import { EraseList } from '../buttons/eraseList/eraseList';
import { Sum } from '../sum/sum';

export function SuitcaseList() {
    const dispatch = useDispatch();
    const itemsSaved = useSelector((store: iState) => store.itemsInSuitcase);

    const handleClick = (e: SyntheticEvent) => {
        const target = e.currentTarget as HTMLButtonElement;
        const id = target.value;
        itemsSaved.map((item) => {
            if (id === item._id) {
                dispatch(deleteItemInSuitcaseAction(item));
            }
        });
    };
    return (
        <div className="card border-secondary mb-3">
            <h3>List</h3>
            <br />
            <div className="container">
                {itemsSaved.map((item) => (
                    <button
                        className="btn btn-info btn-sm"
                        key={item._id}
                        onClick={handleClick}
                        value={String(item._id)}
                    >
                        {item.name} {item.weight}Kg X
                    </button>
                ))}
            </div>
            <AddListButton></AddListButton>
            <EraseList></EraseList>
            <Sum></Sum>
        </div>
    );
}
