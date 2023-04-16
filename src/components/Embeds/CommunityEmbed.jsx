/* eslint-disable max-len */
import TwitchEmbed from './Twitch';
import YouTubeEmbed from './YouTube';
import MedalEmbed from './MedalEmbed';
import CommentComponent from '../Page/CommentComponent';
import styles from './Embeds.css';
import CommentForm from '../Forms/CommentForm';
import { useState } from 'react';
import { useUser } from '../../state/UserContext';
import { addDownvote, addUpvote } from '../../services/fetch-utils';


export default function CommunityEmbed({ clip, allVideos, infiniteScrollRef }) {
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

  async function handleDownvote() {
    await addDownvote(clip.id, user.id);
    await allVideos();
  }

  async function handleUpvote() {
    await addUpvote(clip.id, user.id);
    await allVideos();
  }
  if (!clip) return <></>;
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
      <div>
        <p>Up votes: {up_votes}</p>
        <p>Down votes: {down_votes}</p>
      </div>
      {
        clip.users_id !== user.id ? <div className={styles.Buttons}>
          <button onClick={handleActive}>Add new comment</button>
          <div className={active ? styles.on : styles.off}>
            <CommentForm 
              setActive={setActive} 
              fetchVideos={allVideos} 
              clipId={clip.id}
              userId={user.id} />
          </div>
          <button onClick={async () => await handleUpvote()}>Up Vote</button>
          <button onClick={async () => await handleDownvote()}>Down Vote</button>
        </div> : <></>
      }
    </div>
  );
}
