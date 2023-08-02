import { FC } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ onChange, placeholder }) => (
  <input
    className={styles.input}
    onChange={onChange}
    type="text"
    placeholder={placeholder}
  />
);
export default Input;
