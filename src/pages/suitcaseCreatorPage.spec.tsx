import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SuitcaseCreator } from './suitcaseCreatorPage';

describe('Given the component SuitcaseCreator', () => {
    describe('when the component is called', () => {
        test('then it should be rendered', () => {
            render(
                <MemoryRouter>
                    <SuitcaseCreator />
                </MemoryRouter>
            );

            expect(screen.getByText(/suitcase creator/i)).toBeInTheDocument();
        });
    });
});
