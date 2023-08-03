import { render } from '@testing-library/react';
import Container from '../container/Container';

import styles from '../container/Container.module.scss';

describe('Container', () => {
  it('renders without error', () => {
    const { container } = render(<Container>Содержимое</Container>);
    expect(container).toBeInTheDocument();
  });

  it('renders the passed content', () => {
    const content = <p>Тестовое содержимое</p>;
    const { getByText } = render(<Container>{content}</Container>);
    const contentElement = getByText('Тестовое содержимое');

    expect(contentElement).toBeInTheDocument();
  });

  it('has the correct CSS classes', () => {
    const content = <p>Тестовое содержимое</p>;
    const { container } = render(<Container>{content}</Container>);
    const containerElement = container.querySelector(`.${styles.container}`);

    expect(containerElement).toHaveClass(styles.container);
  });
});
