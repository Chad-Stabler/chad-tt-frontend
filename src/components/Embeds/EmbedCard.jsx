import { useState } from 'react';
import ClipUpdateForm from '../Forms/ClipUpdateForm';
import styles from './Embeds.css';
import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';
import { useUser } from '../../state/UserContext';


export default function EmbedCard({ clip, deleteClip, fetchVideos }) {
  const [active, setActive] = useState(false);
  const user = useUser();

  function handleActive() {
    setActive(!active);
  }

  return (
    <div className={styles.EmbedCard}>
      {clip.o_site === 'youtube' ? <YouTubeEmbed embedId={clip.clip_link}/> 
        : <TwitchEmbed URL={clip.clip_link}/>}
      <h1>{clip.title}</h1>
      <p>{clip.description || 'No description'}</p>
      {
        clip.users_id === user.user.id ? <div>
          <button onClick={() => deleteClip(clip.id)}>Delete clip</button>
          <button onClick={handleActive}>
              Update Title/description
          </button>
          <div className={active ? styles.on : styles.off}>
            <ClipUpdateForm 
              fetchVideos={fetchVideos} setActive={setActive}
              clipId={clip.id}
            />
          </div>
        </div> : <></>}
    </div>
  );
}
