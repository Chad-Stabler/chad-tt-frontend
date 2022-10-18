import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import CommunityCard from './CommunityCard';




export default function Profile() {
  return <section className={styles.ProfileCss}>
    <CommunityCard />
    <EmbedList />
  </section>;

}
