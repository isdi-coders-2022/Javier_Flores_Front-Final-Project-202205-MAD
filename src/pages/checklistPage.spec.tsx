import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ChecklistPage } from './checklistPage';

describe('Given the component ChecklistPage', () => {
    describe('when the component is called', () => {
        test('then it should be rendered', () => {
            render(
                <MemoryRouter>
                    <ChecklistPage />
                </MemoryRouter>
            );

            expect(screen.getByText(/checklist/i)).toBeInTheDocument();
        });
    });
});
