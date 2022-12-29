import Header from "../../components/Header";
import Input from "../../components/Input";
import styles from "./styles.module.scss";

export default function Login() {
  return (
    <>
      <Header />
      <form className={styles.login}>
        <Input />
      </form>
    </>
  );
}
