import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";
import NavLink from "next/link";

function MainNavigation() {
  const rounter = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React DUMMY App</div>
      <nav>
        <ul>
          <li>
            <NavLink
              href="/"
              className={rounter.pathname === "/" ? classes.active : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/users"
              className={rounter.pathname === "/users" ? classes.active : ""}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/carts"
              className={rounter.pathname === "/carts" ? classes.active : ""}
            >
              Carts
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/products"
              className={rounter.pathname === "/products" ? classes.active : ""}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
