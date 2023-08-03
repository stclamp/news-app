import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => (
  <button
    onClick={onClick}
    type={type}
    className={`${styles.button} ${className}`}
  >
    {children}
  </button>
);
export default Button;
