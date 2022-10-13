import styles from './Embeds.css';

export default function TwitchEmbed({ URL }) {

  return <iframe className={styles.TwitchEmbed}
    src={`${URL}&parent=http://localhost:7891`}
    height="300" width="450"
    allowFullScreen/>;
}
