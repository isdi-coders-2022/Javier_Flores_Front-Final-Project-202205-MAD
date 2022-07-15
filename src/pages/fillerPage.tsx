import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../app/store';
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
                <div className="pool__suggestions">
                    <h3>Suggestions</h3>
                    {suggestions.map((item) => (
                        <button key={item.id}>
                            {item.name} {item.weight}Kg +
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
