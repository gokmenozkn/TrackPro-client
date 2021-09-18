/* eslint-disable */
import navigation from "./navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStore,
  faNewspaper,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className={navigation.nav}>
    <ul className={navigation.nav__list}>
      <li className={navigation.nav__list__item}>
        <Link to="/">
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon={faHome} />
          Dashboard
        </Link>
      </li>
      <li className={navigation.nav__list__item}>
        <Link to="/market">
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon={faStore} />
          Market
        </Link>
      </li>
      <li className={navigation.nav__list__item}>
        <a href="">
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon={faNewspaper} />
          News
        </a>
      </li>
      <li className={navigation.nav__list__item}>
        <a href="">
          <FontAwesomeIcon style={{ marginRight: "1em" }} icon={faHistory} />
          History
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
