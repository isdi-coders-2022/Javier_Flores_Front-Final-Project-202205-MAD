import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iState } from '../../../app/store';
import { deleteAllItemInSuitcaseAction } from '../../../reducers/itemsInSuitcase.reducer/action.creator';
import './logoutButton.css';
export function LogoutButton() {
    const dispatch = useDispatch();
    const itemsSaved = useSelector((store: iState) => store.itemsInSuitcase);
    const navigate = useNavigate();
    function handleClick(ev: SyntheticEvent) {
        ev.preventDefault();
        dispatch(deleteAllItemInSuitcaseAction());
        localStorage.clear();
        navigate('/');
    }
    return (
        <>
            <button onClick={handleClick} className="btn btn-primary">
                Logout
            </button>
        </>
    );
}
