//import React from 'react';
import { useInView } from 'react-intersection-observer';
import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import ProfileCard from './ProfileCard';
import ProfileForms from '../Forms/ProfileForms';
import { useState } from 'react';
import { getUserVideos } from '../../services/fetch-utils';
import { useUser } from '../../state/UserContext';
import { useEffect } from 'react';




export default function Profile() {
  const { user } = useUser();
  const [active, setActive] = useState(false);
  const [clips, setClips] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  async function fetchVideos() {
    const from = 0;
    const to = page * perPage;
    const vids = await getUserVideos(user.id, from, to);
    setClips(vids);
  }

  useEffect(() => {
    fetchVideos();
  }, [clips]);

  const nextPage = async () => {
    const firstClips = clips;
    setPage(page + 1);
    const moreClips = await fetchVideos();
    const newLoad = firstClips.concat(moreClips);
    setClips(newLoad);
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
      active={active} setActive={setActive} clips={clips}
      currUser={true}
      infiniteScrollRef={infiniteScrollRef}
      fetchVideos={fetchVideos}
    />
    <div className={active ? styles.on : styles.off}>
      <ProfileForms setActive={setActive} fetchVideos={fetchVideos}/>
    </div>
  </section>;

}
