import styles from './Embeds.css';

export default function YouTubeEmbed({ embedId }) {
  return <div className={styles.YouTubeEmbed}>
    <iframe
      width="200"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube Embed"/>
  </div>;
}
