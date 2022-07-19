import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { AddListButton } from '../buttons/AddListButton/addListButton';
import { EraseList } from '../buttons/eraseList/eraseList';
import { Sum } from '../sum/sum';

export function SuitcaseList() {
    const dispatch = useDispatch();
    const itemsSaved = useSelector((store: iState) => store.itemsInSuitcase);

    return (
        <div className="SuitcaseList">
            <div className="suitcase__list">
                <h3>List</h3>
                {itemsSaved.map((item) => (
                    <button
                        key={item._id}
                        // onClick={handleClick}
                        value={String(item._id)}
                    >
                        {item.name} {item.weight}Kg +
                    </button>
                ))}
            </div>
            {/* <DeleteListButton></DeleteListButton> */}
            <AddListButton></AddListButton>

            <EraseList></EraseList>
            <Sum></Sum>
        </div>
    );
}
