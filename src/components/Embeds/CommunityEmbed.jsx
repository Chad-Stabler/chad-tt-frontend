import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';
import CommentComponent from '../Page/CommentComponent';
import styles from './Embeds.css';
import CommentForm from '../Forms/CommentForm';
import { useState } from 'react';
import { useUser } from '../../state/UserContext';
import { addUpvote } from '../../services/fetch-utils';


export default function CommunityEmbed({ clip, allVideos }) {
  const [active, setActive] = useState(false);
  const { user } = useUser();
  let up_votes = 0;
  let down_votes = 0;

  if (clip.votes) {
    clip.votes.forEach(vote => {
      vote.vote_up ? up_votes += 1 : down_votes += 1;
    });
  } 

  function handleActive() {
    setActive(!active);
  }
  
  

  async function handleUpvote() {
    await addUpvote(clip.id, user.id);
    await allVideos();
  }
  return (
    <div className={styles.EmbedCard}>
      {clip.o_site === 'youtube' ? <YouTubeEmbed embedId={clip.clip_link}/> 
        : <TwitchEmbed URL={clip.clip_link}/>}
      <div className={styles.ClipInfo}>
        <h1>{clip.title}</h1>
        <div className={styles.ClipDesc}>{clip.description 
        || 'No description'}</div>
        <div><h1>Comments:</h1>
          {clip.comments.length > 0 ? clip.comments.map((comment, i) => 
            <CommentComponent key={clip.comment + i} comment={comment}/>) 
            : <p>No comments</p>}
        </div>
      </div>
      <p>Up votes: {up_votes}</p>
      <div className={styles.Buttons}>
        <button onClick={handleActive}>Add new comment</button>
        <div className={active ? styles.on : styles.off}>
          <CommentForm 
            setActive={setActive} 
            fetchVideos={allVideos} 
            clipId={clip.id}
            userId={user.id} />
        </div>
        <button onClick={async () => await handleUpvote()}>Up Vote</button>
        <button>Down Vote</button>
      </div>
    </div>
  );
}
