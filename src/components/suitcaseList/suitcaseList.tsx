import { AddListButton } from '../buttons/AddListButton/addListButton';
import { DeleteListButton } from '../buttons/deleteListButton/deleteListButton';

export function SuitcaseList() {
    return (
        <div className="SuitcaseList">
            <h1>List</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <DeleteListButton></DeleteListButton>
            <AddListButton></AddListButton>
        </div>
    );
}
