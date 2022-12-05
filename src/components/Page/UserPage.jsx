import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import UserCard from './UserCard';
import { useState } from 'react';
import { getUserVideos } from '../../services/fetch-utils';




export default function UserPage() {
  const [clips, setClips] = useState([]);

  async function fetchVideos() {
    const data = await getUserVideos();
    setClips(data);
  }


  return <section className={styles.ProfileCss}>
    <UserCard />
    <EmbedList
      fetchVideos={fetchVideos} clips={clips} 
    />
  </section>;

}
