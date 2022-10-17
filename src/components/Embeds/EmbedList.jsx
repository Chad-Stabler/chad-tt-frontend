import { getUserVideos } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Embeds.css';
import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';

export default function EmbedList() {
  const [clips, setClips] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  async function fetchVideos() {
    const data = await getUserVideos();
    setClips(data);
  }

  return <div className={styles.ListCard}>
    <div className={styles.EmbedList}>
      {
        clips.map((clip, i) => <div className={styles.EmbedCard} 
          key={clip.clip_link + i}>
          {clip.o_site === 'youtube' ? <YouTubeEmbed embedId={clip.clip_link}/> 
            : <TwitchEmbed URL={clip.clip_link}/>}
          <h1>{clip.title}</h1>
          <p>{clip.description || 'No description'}</p>
        </div>
        )
      }
    </div>
    <button>Add new clip</button>
  </div>;
}

