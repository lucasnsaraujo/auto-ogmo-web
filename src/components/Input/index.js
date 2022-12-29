import styles from "./styles.module.scss";

export default function Input({ ...rest }) {
  return <input className={styles.button} {...rest} />;
}
