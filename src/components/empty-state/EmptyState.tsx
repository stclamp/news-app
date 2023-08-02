import styles from './EmptyState.module.scss';
import emptyState from '@/assets/images/empty_state.png';

const EmptyState = () => (
  <div className={styles['empty-wrapper']}>
    <img src={emptyState} alt="Empty" />
    <p className={styles.text}>No results found</p>
  </div>
);
export default EmptyState;
