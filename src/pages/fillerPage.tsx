import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState, store } from '../app/store';
import { loadItemAction } from '../reducers/items.reducer/action.creator';
import { SuggestionsRepository } from '../services/repository/repository.suggestions';

export function Filler() {
    const dispatch = useDispatch();
    const suggests = useMemo(() => new SuggestionsRepository(), []);
    useEffect(() => {
        suggests
            .getAllSuggestions('rainy')
            .then((suggestions) => dispatch(loadItemAction(suggestions)));
    }, [suggests, dispatch]);
    const suggestions = useSelector((store: iState) => store.suggestions);
    return (
        <>
            <div className="pool">
                <ul className="pool__suggestions">
                    {suggestions.map((item) => (
                        <li key={item.id}>
                            <p>
                                {item.name} {item.weight}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
