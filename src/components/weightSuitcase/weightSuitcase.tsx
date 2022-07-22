import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../app/store';
import { iSuitcase } from '../../interfaces/interfaces';
import {
    createSuitcaseAction,
    modifySuitcaseAction,
} from '../../reducers/suitcases.reducer/action.creator';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';
import './weightSuitcase.css';
export function WeightSuitcase() {
    const dispatch = useDispatch();
    const [formWeight, setFormWeight] = useState(0);
    const userId = localStorage.getItem('userId');
    const userSuitcase = useSelector((store: iState) => store.userSuitcase);
    const newSuitcase: iSuitcase = {
        limitWeight: 0,
        destination: 'beach',
        owner: userId as string,
        isWeightOk: true,
    };
    async function handleSuitcase(event: SyntheticEvent) {
        event.preventDefault();
        const suitcase = await new SuitcasesRepository().addSuitcase(
            newSuitcase
        );
        dispatch(createSuitcaseAction(suitcase));
    }

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();

        const suitcaseWithWeight =
            await new SuitcasesRepository().updateSuitcase(
                { limitWeight: formWeight },
                userSuitcase._id as string
            );
        dispatch(modifySuitcaseAction(suitcaseWithWeight));
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormWeight(element.value);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Create your Suitcase</h4>
                    <svg
                        width="190"
                        height="268"
                        viewBox="0 0 190 268"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_153_2)">
                            <path
                                d="M23.5 247C18.0833 247 13.4792 245.104 9.6875 241.312C5.89583 237.521 4 232.917 4 227.5V74.75C4 68.4667 6.22083 63.1042 10.6625 58.6625C15.1042 54.2208 20.4667 52 26.75 52H56V9.75C56 6.93333 56.9208 4.60417 58.7625 2.7625C60.6042 0.920835 62.9333 0 65.75 0H124.25C127.067 0 129.396 0.920835 131.238 2.7625C133.079 4.60417 134 6.93333 134 9.75V52H166.5C171.917 52 176.521 53.8958 180.312 57.6875C184.104 61.4792 186 66.0833 186 71.5V227.5C186 232.917 184.104 237.521 180.312 241.312C176.521 245.104 171.917 247 166.5 247C166.5 250.683 165.254 253.771 162.762 256.262C160.271 258.754 157.183 260 153.5 260C149.817 260 146.729 258.754 144.238 256.262C141.746 253.771 140.5 250.683 140.5 247H49.5C49.5 250.683 48.2542 253.771 45.7625 256.262C43.2708 258.754 40.1833 260 36.5 260C32.8167 260 29.7292 258.754 27.2375 256.262C24.7458 253.771 23.5 250.683 23.5 247ZM69 52H121V13H69V52ZM23.5 227.5H166.5V71.5H23.5V227.5ZM46.25 208H59.25V91H46.25V208ZM88.5 208H101.5V91H88.5V208ZM130.75 208H143.75V91H130.75V208ZM23.5 227.5V71.5V227.5Z"
                                fill="#FFF9F9"
                                fill-opacity="0.19"
                                shape-rendering="crispEdges"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_153_2"
                                x="0"
                                y="0"
                                width="190"
                                height="268"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_153_2"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_153_2"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                    <br />
                    <button
                        className="btn btn-success btn-lg start"
                        onClick={handleSuitcase}
                    >
                        start
                    </button>
                    <p className="card-text"></p>
                </div>
            </div>

            <div className="form-group limitweight">
                <form onSubmit={handleSubmit}>
                    <p className="form__input">Limit weight:</p>
                    <input
                        className="form-control form-control-lg"
                        placeholder="limit weight"
                        id="inputLarge"
                        type="number"
                        name="limitWeight"
                        value={formWeight}
                        onChange={handleChange}
                        required
                    />
                    <button className="btn btn-secondary save" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}
