import { useState } from 'react';
import ClipUpdateForm from '../Forms/ClipUpdateForm';
import styles from './Embeds.css';
import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';
import MedalEmbed from './MedalEmbed';
import { useUser } from '../../state/UserContext';


export default function EmbedCard({ clip, deleteClip,
  fetchVideos, infiniteScrollRef }) {
  const [active, setActive] = useState(false);
  const { user } = useUser();

  function handleActive() {
    setActive(!active);
  }

  if (!clip) return;
  return (
    <div className={styles.EmbedCard} ref={infiniteScrollRef}>
      {
        clip.o_site === 'youtube' && <YouTubeEmbed embedId={clip.clip_link}/>
      }
      {
        clip.o_site === 'twitch' && <TwitchEmbed URL={clip.clip_link}/>
      }
      {
        clip.o_site === 'medal' && <MedalEmbed URL={clip.clip_link}/>
      }
      <h1>{clip.title}</h1>
      <p>{clip.description || 'No description'}</p>
      {
        clip.users_id === user.id && <div>
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
        </div>}
    </div>
  );
}
