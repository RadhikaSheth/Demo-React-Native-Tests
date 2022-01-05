import React from 'react';
import { cleanup, render, toHaveStyle } from '@testing-library/react-native';
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should show hello world', () => {
    const helloWorldText = 'Hello World!';
    const notFoundText = 'Not found text';
    const { toJSON, getByText, queryByText } = render(<App />);
    const foundHelloWorldTextElement = getByText(helloWorldText);
    const notFoundTextElement = queryByText(notFoundText);
    expect(foundHelloWorldTextElement.props.children).toEqual(helloWorldText);
    expect(notFoundTextElement).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should not find a dynamic component', () => {
    const { queryByTestId } = render(<App />);
    const notFoundDynamicComponent = queryByTestId('dynamicComponent');
    expect(notFoundDynamicComponent).toBeNull();
  });
  it('should match the body style', () => {
    const { getByTestId } = render(<App />);
    const foundBodyElement = getByTestId('body');
    expect(foundBodyElement.props.style.backgroundColor).toEqual('#ffffff');
  });
});