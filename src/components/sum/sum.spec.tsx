import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { Sum } from './sum';

describe('Given component Sum', () => {
    describe('When component is called', () => {
        test('Then it should render correctly', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <Sum />
                    </BrowserRouter>
                </Provider>
            );
            expect(screen.getByText('Total weight: 0 Kg')).toBeInTheDocument();
        });
    });
});
