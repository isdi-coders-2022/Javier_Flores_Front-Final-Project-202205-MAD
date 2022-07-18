import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../app/store';
import { ItemForm } from '../components/itemForm/ItemForm';
import { SuitcaseList } from '../components/suitcaseList/suitcaseList';
import { iItem } from '../interfaces/interfaces';
import {
    createItemAction,
    deleteItemAction,
    loadItemAction,
    modifyItemAction,
} from '../reducers/items.reducer/action.creator';
import { createItemInSuitcaseAction } from '../reducers/itemsInSuitcase.reducer/action.creator';
import { modifySuitcaseAction } from '../reducers/suitcases.reducer/action.creator';
import { SuggestionsRepository } from '../services/repository/repository.suggestions';
import { ChecklistPage } from './checklistPage';

export function Filler() {
    const dispatch = useDispatch();
    const suggestions = useSelector((store: iState) => store.suggestions);
    const userDestination = useSelector(
        (store: iState) => store.userSuitcase.destination
    );
    const itemsUser = useSelector((store: iState) => store.itemsInSuitcase);
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    const [itemPool, setItemPool] = useState({
        item: {},
        quantity: 1,
        isChequed: false,
    });

    const suggests = useMemo(() => new SuggestionsRepository(), []);
    useEffect(() => {
        suggests
            .getAllSuggestions(userDestination)
            .then((suggestions) => dispatch(loadItemAction(suggestions)));
    }, [suggests, dispatch, userDestination]);

    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        const element = ev.target as HTMLFormElement;
        const addedItem = suggestions.find((x) => x._id === element.value);
        dispatch(createItemInSuitcaseAction(addedItem as iItem));
        element.style.display = 'none'; // hide suggestion when clicked
        console.log(userSuitcase, 'EEEEEEEEE');
    }

    return (
        <>
            <div className="pool">
                <div className="pool__suggestions">
                    <h3>Suggestions</h3>
                    {suggestions.map((item) => (
                        <button
                            key={item._id}
                            onClick={handleClick}
                            value={String(item._id)}
                        >
                            {item.name} {item.weight}Kg +
                        </button>
                    ))}
                </div>
            </div>
            <ItemForm></ItemForm>
            <SuitcaseList></SuitcaseList>
        </>
    );
}
