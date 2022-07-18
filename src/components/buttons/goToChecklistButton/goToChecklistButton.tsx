import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function GoToCheckListButton() {
    const navigate = useNavigate();
    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        navigate('/checklist');
    }
    return (
        <>
            <button onClick={handleClick} className="logout__button">
                Go to checklist
            </button>
        </>
    );
}
