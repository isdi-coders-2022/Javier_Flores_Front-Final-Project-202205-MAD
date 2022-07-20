import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { ChecklistPage } from './checklistPage';

describe('Given the component ChecklistPage', () => {
    describe('when the component is called', () => {
        test('then it should render correctly', () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <ChecklistPage />
                    </BrowserRouter>
                </Provider>
            );

            const element = screen.getByText(/manage/i);
            expect(element).toBeInTheDocument();
        });
    });
});
