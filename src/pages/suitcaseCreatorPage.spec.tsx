import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { SuitcaseCreator } from './suitcaseCreatorPage';

describe('Given the component SuitcaseCreator', () => {
    describe('when the component is called', () => {
        test('then it should render correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <SuitcaseCreator />
                    </BrowserRouter>
                </Provider>
            );

            const element = screen.getByText(/Limit weight/i);
            await waitFor(() => {
                expect(element).toBeInTheDocument();
            });
        });
    });
});
