import CommunityEmbed from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import CommunityCard from './CommunityCard';




export default function Community() {
  return <section className={styles.ProfileCss}>
    <CommunityCard />
    <CommunityEmbed />
  </section>;
}
