import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { HeaderMenu } from './headerMenu';

describe('Given the component HeaderMenu', () => {
    describe('When I render the component', () => {
        test('Then it should be rendered', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <HeaderMenu />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText(/User/i)).toBeInTheDocument();
        });
    });
});
