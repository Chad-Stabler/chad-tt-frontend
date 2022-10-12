import Navigation from './Navigation.jsx';
import User from './User.jsx';
import styles from './Header.css';
// import SlideOutMenu from './SlideOutMenu.jsx';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        {/* <SlideOutMenu /> */}
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User />
    </header>
  );
}
