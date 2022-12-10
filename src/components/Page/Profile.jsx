//import React from 'react';
import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import ProfileCard from './ProfileCard';
import ProfileForms from '../Forms/ProfileForms';
import { useState } from 'react';
import { getUserVideos } from '../../services/fetch-utils';
import { useUser } from '../../state/UserContext';




export default function Profile() {
  const { user } = useUser();
  const [active, setActive] = useState(false);
  const [clips, setClips] = useState([]);

  async function fetchVideos() {
    const data = await getUserVideos(user.id);
    setClips(data);
  }


  return <section className={styles.ProfileCss}>
    <ProfileCard />
    <EmbedList 
      active={active} setActive={setActive} 
      fetchVideos={fetchVideos} clips={clips}
      currUser={true}
    />
    <div className={active ? styles.on : styles.off}>
      <ProfileForms setActive={setActive} fetchVideos={fetchVideos} />
    </div>
  </section>;

}
