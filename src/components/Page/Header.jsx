import Navigation from './Navigation.jsx';
import styles from './Header.css';
// import SlideOutMenu from './SlideOutMenu.jsx';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        {/* <SlideOutMenu /> */}
      </div>

      <h1>Twitch Tok</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

    </header>
  );
}
