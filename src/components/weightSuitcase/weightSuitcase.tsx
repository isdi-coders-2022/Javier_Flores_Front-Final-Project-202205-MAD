export function WeightSuitcase() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const registerUser = await new SuitcasesRepository().registerUser(
            formData
        );
        console.log(registerUser);
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    return (
        <div className="WeightSuitcase">
            <form>
                <label>
                    Weight: <input type="number" />
                </label>
            </form>
        </div>
    );
}
