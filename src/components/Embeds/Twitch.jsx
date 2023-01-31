import styles from './Embeds.css';

export default function TwitchEmbed({ URL }) {

  return <iframe className={styles.TwitchEmbed}
    src={`${URL}&parent=jocular-belekoy-47a7df.netlify.app`}
    height="300" width="450"
    allowFullScreen/>;
}
