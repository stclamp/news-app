import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles['spinner-wrapper']}>
    <div className={styles['lds-ellipsis']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
export default Spinner;
