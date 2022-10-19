import { getAllVideos } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Embeds.css';
import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';

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
        clips.map((clip, i) => <div className={styles.EmbedCard} 
          key={clip.clip_link + i}>
          {clip.o_site === 'youtube' ? <YouTubeEmbed embedId={clip.clip_link}/> 
            : <TwitchEmbed URL={clip.clip_link}/>}
          <h1>{clip.title}</h1>
          <p>{clip.description || 'No description'}</p>
          <div>{clip.comments.length > 0 ? clip.comments.map((comment, i) => (
            <p key={comment.id + i}>{comment.details}</p>)) 
            : <p>No comments</p>}
          </div>
          <button>Add new comment</button>
          <button>Up Vote</button>
          <button>Down Vote</button>
        </div>
        )
      }
    </div>
  </div>;
}
