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
        <div className="itemForm">
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    className="input"
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
                <br />
                <button className="button__create" type="submit">
                    Create
                </button>
            </form>
        </div>
    );
}
