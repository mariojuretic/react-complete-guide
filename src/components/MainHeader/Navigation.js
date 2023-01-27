import AuthContext from "../../store/auth-context";

import styles from "./Navigation.module.css";

const Navigation = (props) => (
  <AuthContext.Consumer>
    {(ctx) => (
      <nav className={styles.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={props.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    )}
  </AuthContext.Consumer>
);

export default Navigation;
