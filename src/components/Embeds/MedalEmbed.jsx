import styles from './Embeds.css';

export default function MedalEmbed({ URL }) {
  return <div className={styles.medalEmbed}>
    <iframe height="300px" width="450px" 
      src={`${URL}?autoplay=0&muted=0&loop=0`} 
      frameBorder="0" allow="autoplay" allowFullScreen />
  </div>;
}
