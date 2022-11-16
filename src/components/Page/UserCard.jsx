import { getCommenterData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Profile.css';

export default function UserCard({ id }) {
  const [userData, setUserData] = useState({
    GamerTag: 'N/A',
    email: 'N/A',
    bio: 'N/A',
    platforms: 'N/A',
    channelLinks: 'N/A',
    avatar_png: ''
  });

  async function fetchUserData() {
    const data = await getCommenterData(id);
    setUserData(data);
  }


  useEffect(() => {
    fetchUserData();
  }, []);

  return <div className={styles.ProfileCard}>
    <img src={userData.avatar_png || '/default.png'}/><br/>
    <h1>Gamertag:</h1>
    <p>{userData.GamerTag}</p><br/>
    <h1>Email:</h1>
    <p>{userData.email}</p><br/>
    <h1>Bio:</h1>
    <p>{userData.bio}</p><br/>
    <h1>Platforms:</h1>
    <p>{userData.platforms}</p><br/>
    <h1>Channel Links:</h1>
    <p>{userData.channelLinks}</p>
  </div>;
}
