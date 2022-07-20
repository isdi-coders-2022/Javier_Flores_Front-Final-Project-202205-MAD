import { SuitcaseList } from './suitcaseList';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';

describe('Given the component SuitcaseList', () => {
    describe('When the component is called', () => {
        test('Then it should render', () => {
            render(
                <Provider store={store}>
                    <MemoryRouter>
                        <SuitcaseList></SuitcaseList>
                    </MemoryRouter>
                </Provider>
            );

            expect(screen.getByText(/List/i)).toBeInTheDocument();
        });
    });
});
