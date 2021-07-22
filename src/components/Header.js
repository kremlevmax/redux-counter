import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loginSliceActions } from "../store/login";

const Header = () => {
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(loginSliceActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginStatus && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
