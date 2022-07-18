import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function GoToCreateSuitcaseButton() {
    const navigate = useNavigate();
    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        navigate('/newSuitcase');
    }
    return (
        <>
            <button onClick={handleClick} className="header__button">
                Go to suitcase creator
            </button>
        </>
    );
}
