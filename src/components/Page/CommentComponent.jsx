import { useState, useEffect } from 'react';
import { getCommenterData } from '../../services/fetch-utils';
import styles from '../Embeds/Embeds.css';

export default function CommentMap({ comment }) {
  const [commenter, setCommenter] = useState({
    avatar_png: '',
    GamerTag: '',
  });

  async function fetchCommenter() {
    setCommenter(await getCommenterData(comment.commenter_id));
  }

  useEffect(() => {
    fetchCommenter();
  }, []);

  return (
    <div className={styles.CommentSection}><img src={commenter.avatar_png} />
      <p>{commenter.GamerTag} says {comment.details}</p></div>
  );
}
