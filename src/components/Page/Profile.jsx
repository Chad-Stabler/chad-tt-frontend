//import React from 'react';
import EmbedList from '../Embeds/EmbedList';
import styles from '../Page/Profile.css';
import ProfileCard from './ProfileCard';





export default function Profile() {
  return <section className={styles.ProfileCss}>
    <ProfileCard />
    <EmbedList />
  </section>;

}
