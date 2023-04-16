//import React from 'react';
import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import ProfileCard from './ProfileCard';
import ProfileForms from '../Forms/ProfileForms';
import { useState, useEffect } from 'react';
import { getUserVideos } from '../../services/fetch-utils';
import { useUser } from '../../state/UserContext';
import { useClipContext } from '../../state/ClipContext';
import { useInView } from 'react-intersection-observer';

export default function Profile() {
  const { clips, setClips, page, 
    setPage, perPage, setPerPage } = useClipContext();
  const { user } = useUser();
  const [active, setActive] = useState(false);

  async function fetchVideos() {
    setPerPage(6);
    const from = 0;
    const to = page * perPage;
    const vids = await getUserVideos(user.id, from, to);
    setClips(vids);
  }
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

  useEffect(() => {
    fetchVideos();
  }, [clips]);



  return <section className={styles.ProfileCss}>
    <ProfileCard />
    <EmbedList 
      active={active} setActive={setActive} clips={clips}
      currUser={true}
      fetchVideos={fetchVideos}
      infiniteScrollRef={infiniteScrollRef}
    />
    <div className={active ? styles.on : styles.off}>
      <ProfileForms setActive={setActive} fetchVideos={fetchVideos}/>
    </div>
  </section>;

}
