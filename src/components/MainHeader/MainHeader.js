import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => (
  <header className={styles["main-header"]}>
    <h1>A Typical Page</h1>
    <Navigation onLogout={props.onLogout} />
  </header>
);

export default MainHeader;
