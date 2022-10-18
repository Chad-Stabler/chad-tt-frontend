import { getUserVideos, deleteVideo } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Embeds.css';
import EmbedCard from './EmbedCard';

export default function EmbedList() {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const data = await getUserVideos();
    setClips(data);
  }

  async function deleteClip(clipId) {
    await deleteVideo(clipId);
    fetchVideos();
  }


  return <div className={styles.ListCard}>
    <div className={styles.EmbedList}>
      {
        clips.map((clip, i) => <EmbedCard key={clip + i}
          clip={clip}
          fetchVideos={fetchVideos}
          deleteClip={deleteClip}
        />
        )
      }
    </div>
    <button>Add new clip</button>
  </div>;
}

