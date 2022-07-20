import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { iItem } from '../../interfaces/interfaces';
import { createItemInSuitcaseAction } from '../../reducers/itemsInSuitcase.reducer/action.creator';
import { ItemsRepository } from '../../services/repository/repository.items';

export function ItemForm() {
    const dispatch = useDispatch();
    const suitcaseDestination = useSelector(
        (store: iState) => store.userSuitcase.destination
    );
    const [formData, setFormData] = useState({
        name: '',
        weight: 0,
        destination: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const itemUser: iItem = await new ItemsRepository().addItem(formData);
        dispatch(createItemInSuitcaseAction(formData));
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({
            ...formData,
            [element.name]: element.value,
            destination: suitcaseDestination,
        });
    }
    return (
        <div className="card border-secondary mb-3">
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <label>Add a new item</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <label>Write the approximate weight (in Kg)</label>
                    <input
                        className="form-control"
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <button className="btn btn-info" type="submit">
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
}
