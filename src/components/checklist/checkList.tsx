import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';

export function CheckList() {
    const dispatch = useDispatch();
    const itemsInSuitcase = useSelector(
        (store: iState) => store.itemsInSuitcase
    );
    const quantity = 1;
    const isChecked = false;
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Items</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Check</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsInSuitcase.map((item) => {
                        return (
                            <tr className="table-active" key={item._id}>
                                <td>{item.name}</td>
                                <td>{quantity}</td>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked"
                                        isChecked=""
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
