import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';

export function CheckList() {
    const dispatch = useDispatch();
    const itemsInSuitcase = useSelector(
        (store: iState) => store.itemsInSuitcase
    );
    return (
        <div className="CheckList">
            <ul className="checklist__list">
                {itemsInSuitcase.map((item) => (
                    <li className="list--item" key={item._id}>
                        <span className="list--item__name">{item.name}</span>
                        {/* <span className="list--item__quantity">1</span> */}
                        <div className="list-item-checkbox">
                            <input type="checkbox" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
