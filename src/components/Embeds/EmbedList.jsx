import { deleteVideo } from '../../services/fetch-utils';
import { useEffect } from 'react';
import styles from './Embeds.css';
import EmbedCard from './EmbedCard';

export default function EmbedList({ active, setActive, fetchVideos, 
  clips, currUser, infiniteScrollRef }) {
  
  useEffect(() => {
    fetchVideos();
  }, []);


  async function deleteClip(clipId) {
    await deleteVideo(clipId);
    fetchVideos();
  }
  
  function handleActive() {
    setActive(!active);
  }

  if (!clips) return <div className={styles.ListCard}>
    Hmm, you dont have any clips yet.</div>;

  return <div className={styles.ListCard}>
    <div className={styles.EmbedList}>
      {
        clips.map((clip, i) => {
          const ref = i == clips.length - 3 ? infiniteScrollRef : undefined;

          return (<EmbedCard key={clip + i}
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

