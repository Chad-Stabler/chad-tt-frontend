import styles from './Embeds.css';

export default function TwitchEmbed({ URL }) {

  return <iframe className={styles.TwitchEmbed}
    src={`${URL}&parent=https://rococo-zuccutto-16e349.netlify.app`}
    height="300" width="450"
    allowFullScreen/>;
}
