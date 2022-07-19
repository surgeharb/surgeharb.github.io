import styles from './styles.module.scss';

const Card = ({ children, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
};

export default Card;
