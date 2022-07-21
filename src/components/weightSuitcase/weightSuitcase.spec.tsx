import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { WeightSuitcase } from './weightSuitcase';
import { SuitcasesRepository } from '../../services/repository/repository.suitcases';
import userEvent from '@testing-library/user-event';

const mockSuitcase = {
    limitWeight: 0,
    destination: 'beach',
    owner: '',
    isWeightOk: true,
};
jest.mock('../../services/repository/repository.suitcases');
describe('Given component WeightSuitcase', () => {
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <WeightSuitcase />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/Weight/i)).toBeInTheDocument();
        });
    });
    describe('When I click on the button', () => {
        test('Then it should be called the dispatch', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <WeightSuitcase />
                    </BrowserRouter>
                </Provider>
            );
            fireEvent.click(screen.getByText(/Weight/i));
        });
    });

    describe('When I click on the button start', () => {
        test('Then SuitcaseRepository should be called', async () => {
            SuitcasesRepository.prototype.addSuitcase = jest
                .fn()
                .mockResolvedValue(mockSuitcase);
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <WeightSuitcase />
                    </BrowserRouter>
                </Provider>
            );
            const button = screen.getByText(/start/i);
            fireEvent.click(button);
            await waitFor(() => {
                expect(
                    SuitcasesRepository.prototype.addSuitcase
                ).toHaveBeenCalled();
            });
        });
    });
    describe('When I change the input text', () => {
        test('Then it should be changed the state', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <WeightSuitcase />
                    </BrowserRouter>
                </Provider>
            );
            const input = screen.getByPlaceholderText(/Weight/i);
            userEvent.type(input, '10');
            await waitFor(() => {
                const value = (input as HTMLInputElement).value;
                expect(value).toBe('10');
            });
        });
    });
});
