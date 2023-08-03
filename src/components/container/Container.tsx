import { FC } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: string | JSX.Element | JSX.Element[];
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
export default Container;
