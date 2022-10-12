import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="auth">Home</NavLink>
      {/* <NavLink to="sales">Sales</NavLink>
      <NavLink to="users">Users</NavLink> */}
      <NavLink to="profile">Profile</NavLink>
      {/* <NavLink to="search">Search</NavLink> */}
    </nav>
  );
}
