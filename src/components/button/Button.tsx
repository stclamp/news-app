import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} type="button" className={styles.button}>
    {children}
  </button>
);
export default Button;
