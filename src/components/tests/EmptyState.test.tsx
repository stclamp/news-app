import { render } from '@testing-library/react';
import EmptyState from '../empty-state/EmptyState';

import emptyState from '@/assets/images/empty_state.png';
import styles from '../empty-state/EmptyState.module.scss';

describe('EmptyState', () => {
  it('renders without error', () => {
    const { container } = render(<EmptyState />);
    expect(container).toBeInTheDocument();
  });

  it('contains image and text', () => {
    const { container, getByAltText, getByText } = render(<EmptyState />);
    const imageElement = getByAltText('No results found');
    const textElement = getByText('No results found');

    expect(container).toContainElement(imageElement);
    expect(container).toContainElement(textElement);
  });

  it('has the correct CSS classes', () => {
    const { container } = render(<EmptyState />);
    const wrapper = container.querySelector(`.${styles['empty-wrapper']}`);
    const text = container.querySelector(`.${styles.text}`);

    expect(wrapper).toHaveClass(styles['empty-wrapper']);
    expect(text).toHaveClass(styles.text);
  });

  it('contains the correct image path', () => {
    const { getByAltText } = render(<EmptyState />);
    const imageElement = getByAltText('No results found');

    expect(imageElement).toHaveAttribute('src', emptyState);
  });
});
