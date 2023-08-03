import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Input from '../input/Input';

describe('Input', () => {
  const onChangeMock = vi.fn();
  const onKeyDownMock = vi.fn();
  const placeholderText = 'Search here';
  const inputValue = 'Example';

  it('renders without error', () => {
    const { container } = render(
      <Input
        onChange={onChangeMock}
        onKeyDown={onKeyDownMock}
        placeholder={placeholderText}
        type="text"
        value=""
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it('correctly passes the values of the props', () => {
    const { getByPlaceholderText } = render(
      <Input
        onChange={onChangeMock}
        onKeyDown={onKeyDownMock}
        placeholder={placeholderText}
        type="text"
        value={inputValue}
      />,
    );
    const inputElement = getByPlaceholderText(placeholderText);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('value', inputValue);
  });

  it('calls event handlers when value changes', () => {
    const { getByPlaceholderText } = render(
      <Input
        onChange={onChangeMock}
        onKeyDown={onKeyDownMock}
        placeholder={placeholderText}
        type="text"
        value=""
      />,
    );
    const inputElement = getByPlaceholderText(placeholderText);

    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('calls event handlers when a key is pressed', () => {
    const { getByPlaceholderText } = render(
      <Input
        onChange={onChangeMock}
        onKeyDown={onKeyDownMock}
        placeholder={placeholderText}
        type="text"
        value=""
      />,
    );
    const inputElement = getByPlaceholderText(placeholderText);

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(onKeyDownMock).toHaveBeenCalled();
  });
});
