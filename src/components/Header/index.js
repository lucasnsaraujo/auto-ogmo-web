import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.heading}>
      <h1>
        auto.<span>ogmo</span>
      </h1>
    </header>
  );
}
