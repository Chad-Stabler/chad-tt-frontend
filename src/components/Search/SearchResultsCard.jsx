
import styles from './Search.css';


export default function SearchResultCard({ games, infinScrollRef }) {

  return <li className = {styles.SearchResultCard} ref = {infinScrollRef}>
    {games.games}
    <img src={games.url_image}/>
  </li>;
}
