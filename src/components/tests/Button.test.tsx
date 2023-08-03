import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Button from '../button/Button';

import styles from '../button/Button.module.scss';

describe('Button', () => {
  const onClickMock = vi.fn();

  it('renders without error', () => {
    const { container } = render(
      <Button onClick={onClickMock}>Нажми меня</Button>,
    );
    expect(container).toBeInTheDocument();
  });

  it('renders the passed content', () => {
    const { getByText } = render(<Button onClick={onClickMock}>Click</Button>);
    const contentElement = getByText('Click');
    expect(contentElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const { getByText } = render(<Button onClick={onClickMock}>Click</Button>);
    const buttonElement = getByText('Click');

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('has the correct CSS classes', () => {
    const customClassName = 'custom-button';
    const { container } = render(
      <Button onClick={onClickMock} className={customClassName}>
        Click
      </Button>,
    );

    const buttonElement = container.querySelector(
      `.${styles.button}.${customClassName}`,
    );
    expect(buttonElement).toHaveClass(styles.button);
    expect(buttonElement).toHaveClass(customClassName);
  });

  it('has the correct type attribute', () => {
    const { getByText } = render(
      <Button onClick={onClickMock} type="button">
        Search!
      </Button>,
    );
    const buttonElement = getByText('Search!');

    expect(buttonElement).toHaveAttribute('type', 'button');
  });
});
