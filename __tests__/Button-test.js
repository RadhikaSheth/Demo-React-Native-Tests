import React from 'react';
import { cleanup, render } from '@testing-library/react-native';

import Button from '../src/components/Button';

afterEach(cleanup);

describe('Button', () => {
    it('should not find a dynamic component', () => {
        const { queryByTestId } = render(<Button />);
        const notFoundDynamicComponent = queryByTestId('dynamicComponent');
        expect(notFoundDynamicComponent).toBeNull();
    });
    it('should find the button via testId', () => {
        const testIdName = 'pressMeButton';
        const { getByTestId } = render(<Button />);
        const foundButton = getByTestId(testIdName);
        expect(foundButton).toBeTruthy();
    });
    it('should find the button title', () => {
        const title = 'Press me!';
        const { getByText } = render(<Button />);
        const foundButtonTitle = getByText(title);
        expect(foundButtonTitle.props.children).toEqual(title);
    });
});