import styles from './Embeds.css';

export default function YouTubeEmbed({ embedId }) {
  return <div className={styles.YouTubeEmbed}>
    <iframe
      width="450"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      title="YouTube Embed"/>
  </div>;
}
