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
    
    //in the case of adding a new clip, this block should execute
    if (clips.length > 2) {
      //like the nextPage function, saves current clips
      // in the block for later use
      const currentVids = clips;
      //gets an array with the 0 index of clip table(newest clip)
      const newClip = await getUserVideos(user.id, 0, 1);
      //concatenates the two arrays like the nextPage function
      setClips(newClip.concat(currentVids));
    } else {
      const vids = await getUserVideos(user.id, from, to);
      setClips(vids);
    }
  }


  async function fetchMoreVideos() {
    if (page !== 1) {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const vids = await getUserVideos(user.id, from, to);
      return vids;
    }
  }

  const nextPage = async () => {
    const firstClips = clips;
    setPage(page + 1);
    const moreClips = await fetchMoreVideos();
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
      fetchVideos={fetchVideos}
      infiniteScrollRef={infiniteScrollRef}
    />
    <div className={active ? styles.on : styles.off}>
      <ProfileForms setActive={setActive} fetchVideos={fetchVideos} />
    </div>
  </section>;

}
