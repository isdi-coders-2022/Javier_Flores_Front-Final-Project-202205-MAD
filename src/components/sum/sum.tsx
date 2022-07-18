import { useSelector } from 'react-redux';
import { iState } from '../../app/store';
import './sum.css';
export function Sum() {
    const limitWeight = useSelector(
        (store: iState) => store.userSuitcase.limitWeight
    );
    const itemsSaved = useSelector((store: iState) => store.itemsInSuitcase);
    const totalWeight = itemsSaved.reduce(
        (acc, item) => acc + Number(item.weight),
        0
    );
    if (itemsSaved.length === 0) {
        return <div>No items in suitcase</div>;
    } else if (totalWeight > limitWeight) {
        return (
            <div className="alert__weight">
                Total weight: {totalWeight.toFixed(1)} Kg!!!
            </div>
        );
    }
    return (
        <div className="sum">
            <div>Total weight: {totalWeight} Kg</div>
        </div>
    );
}
