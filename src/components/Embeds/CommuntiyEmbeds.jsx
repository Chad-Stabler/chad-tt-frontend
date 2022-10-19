import { getAllVideos } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Embeds.css';
import CommunityEmbed from './CommunityEmbed';

export default function EmbedList() {
  const [clips, setClips] = useState([]);
  useEffect(() => {
    AllVideos();
  }, []);

  async function AllVideos() {
    const data = await getAllVideos();
    setClips(data);
  }


  return <div className={styles.communityVid}>
    <div className={styles.EmbedList}>
      {
        clips.map((clip, i) => <CommunityEmbed key={clip.id + i} 
          clip={clip}
          allVideos={AllVideos} />
        )
      }
    </div>
  </div>;
}
