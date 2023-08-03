import { EStatic } from '@/types';
import emptyState from '@/assets/images/empty_state.png';
import styles from './EmptyState.module.scss';

const EmptyState = () => (
  <div className={styles['empty-wrapper']}>
    <img src={emptyState} alt={EStatic.NO_RESULTS} />
    <p className={styles.text}>{EStatic.NO_RESULTS}</p>
  </div>
);
export default EmptyState;
