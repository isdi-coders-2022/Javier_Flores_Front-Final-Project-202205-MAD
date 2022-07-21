import { useDispatch } from 'react-redux';
import {
    fireEvent,
    getByRole,
    render,
    screen,
    waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';
import { ChooseDestination } from './chooseDestination';

jest.mock('../../services/repository/repository.suitcases');
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

const mockSuitcase = {
    items: [],
    destination: '',
};
describe('Given the component ChooseDestination', () => {
    const mockDispatch = jest.fn();
    beforeEach(() => {
        (
            SuitcasesRepository.prototype.updateSuitcase as jest.Mock
        ).mockResolvedValue(mockSuitcase);
        (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    });
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ChooseDestination />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Destination/i)).toBeInTheDocument();
        });
    });
    describe('When I select one option from the select', () => {
        test('Then it should dispatch the action', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ChooseDestination />
                    </BrowserRouter>
                </Provider>
            );
            const element = screen.getByRole('combobox', { hidden: true });
            fireEvent.change(element, { target: { value: 'rainy' } });
            await waitFor(() => {
                expect(mockDispatch).toHaveBeenCalled();
            });
        });
    });
});
