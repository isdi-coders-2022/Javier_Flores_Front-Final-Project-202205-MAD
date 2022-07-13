export function ItemForm() {
    return (
        <div className="itemForm">
            <h1>Add Item</h1>
            <form>
                <label>
                    Name: <input type="text" />
                </label>
                <label>
                    Weight: <input type="number" />
                </label>
                <label>
                    Quantity: <input type="number" />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
