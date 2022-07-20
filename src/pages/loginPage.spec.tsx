import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { LoginPage } from './loginPage';

describe('Given the component LoginPage', () => {
    describe('when the component is called', () => {
        test('then it should render correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage></LoginPage>
                    </BrowserRouter>
                </Provider>
            );

            const element = screen.getByText(/Light Pack/i);
            await waitFor(() => {
                expect(element).toBeInTheDocument();
            });
        });
    });
});
