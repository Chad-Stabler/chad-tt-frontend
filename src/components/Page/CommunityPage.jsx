import CommunityEmbed from '../Embeds/CommuntiyEmbeds';
import styles from './communityPage.css';
import CommunityCard from './CommunityCard';




export default function Community() {
  return <section className={styles.CommunityCard}>
    <CommunityCard />
    <CommunityEmbed />
  </section>;
}
