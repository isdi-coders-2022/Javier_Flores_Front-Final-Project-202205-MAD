import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';

export function WeightSuitcase() {
    dispatch = useDispatch();
    const [formData, setFormData] = useState({
        weight: '',
        suitcaseId: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const addedWeight = await new SuitcasesRepository().addSuitcase();
        console.log(addedWeight);
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    return (
        <div className="WeightSuitcase">
            <form onSubmit={handleSubmit}>
                <p className="form__input">Limit weight</p>
                <input
                    className="input"
                    type="number"
                    name="limitWeight"
                    value={formData.limitWeight}
                    onChange={handleChange}
                    required
                />
            </form>
        </div>
    );
}
