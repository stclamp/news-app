import { render } from '@testing-library/react';
import Spinner from '../spinner/Spinner';
import styles from '../spinner/Spinner.module.scss';

describe('Spinner', () => {
  it('should render', () => {
    const { container } = render(<Spinner />);
    expect(container).toBeInTheDocument();
  });

  it('should have current classes', () => {
    const { container } = render(<Spinner />);
    const wrapper = container.querySelector(`.${styles['spinner-wrapper']}`);
    const ellipsis = container.querySelector(`.${styles['lds-ellipsis']}`);

    expect(wrapper).toHaveClass(styles['spinner-wrapper']);
    expect(ellipsis).toHaveClass(styles['lds-ellipsis']);
  });

  it('contains divs', () => {
    const { container } = render(<Spinner />);
    const ellipsisItems = container.querySelectorAll(
      `.${styles['lds-ellipsis']} > div`,
    );

    expect(ellipsisItems.length).toBe(4);
  });
});
