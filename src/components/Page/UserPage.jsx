import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import UserCard from './UserCard';
import { useState } from 'react';
import { getUserVideos } from '../../services/fetch-utils';
import { useParams } from 'react-router-dom';




export default function UserPage() {
  const [clips, setClips] = useState([]);
  const params = useParams();

  async function fetchVideos() {
    const data = await getUserVideos(params.id);
    setClips(data);
  }


  return <section className={styles.ProfileCss}>
    <UserCard id={params.id}/>
    <EmbedList
      fetchVideos={fetchVideos} clips={clips}
      currUser={false}
    />
  </section>;

}
