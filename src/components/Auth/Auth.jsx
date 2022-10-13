import { Link, Outlet } from 'react-router-dom';
import Styles from './Auth.css';


export default function Auth() {
  return (
    <div className={Styles.nav}>
      <h1>Auth</h1>
      <nav>
        <Link to="home">Home</Link>
        <Link to="signIn">Sign In</Link>
        <Link to="signUp">Sign Up</Link>
      </nav>
      <Outlet />
    </div>
  );
}
