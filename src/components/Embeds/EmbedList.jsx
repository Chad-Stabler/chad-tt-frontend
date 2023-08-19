import { deleteVideo } from '../../services/fetch-utils';
import styles from './Embeds.css';
import EmbedCard from './EmbedCard';
import Loading from '../Page/Loading';
import { useEffect, useState } from 'react';

export default function EmbedList({ active, setActive, fetchVideos, 
  clips, currUser, infiniteScrollRef }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
    setLoading(false);
  }, []);

  async function deleteClip(clipId) {
    await deleteVideo(clipId);
    fetchVideos();
  }
  
  function handleActive() {
    setActive(!active);
  }

  if (!clips) return <div className={styles.ListCard}>
    Hmm, you don&apos;t have any clips yet.</div>;

  return <div className={styles.ListCard}>
    <div className={styles.EmbedList}>
      { loading ? <Loading/> : 
        clips.map((clip, i) => {
          const ref = i == clips.length - 3 ? infiniteScrollRef : undefined;
          if (clip) return (<EmbedCard key={clip + i}
            clip={clip}
            fetchVideos={fetchVideos}
            deleteClip={deleteClip}
            infiniteScrollRef={ref}
          />);
        })}
    </div>
    {currUser && <button onClick={handleActive}>Add new clip</button>}
  </div>;
}

