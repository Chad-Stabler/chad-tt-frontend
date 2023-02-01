//import React from 'react';
import { useInView } from 'react-intersection-observer';
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
  const [page, setPage] = useState(1);
  const perPage = 6;

  async function fetchVideos() {
    const from = page * perPage - perPage;
    const to = page * perPage;
    const clips = await getUserVideos(user.id, from, to);
    setClips(clips);
  }
  console.log(clips);

  const nextPage = async () => {
    const firstClips = clips;
    setPage(page + 1);
    await fetchVideos();
    setClips(firstClips.concat(clips));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true, 
    onChange: (inView) => {
      if (inView) nextPage();
    }
  }).ref;



  return <section className={styles.ProfileCss}>
    <ProfileCard />
    <EmbedList 
      active={active} setActive={setActive} 
      fetchVideos={fetchVideos} clips={clips}
      currUser={true}
      infiniteScrollRef={infiniteScrollRef}
    />
    <div className={active ? styles.on : styles.off}>
      <ProfileForms setActive={setActive} fetchVideos={fetchVideos} />
    </div>
  </section>;

}
