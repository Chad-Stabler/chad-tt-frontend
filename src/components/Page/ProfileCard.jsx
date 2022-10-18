import { getUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Profile.css';

export default function ProfileCard() {
  const [userData, setUserData] = useState({
    GamerTag: 'N/A',
    email: 'N/A',
    bio: 'N/A',
    platforms: 'N/A',
    channelLinks: 'N/A',
    avatar_png: ''
  });
 
  async function fetchUserData() {
    const data = await getUserData();
    setUserData(data);
    console.log(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return <div className={styles.ProfileCard}>
    <img src={userData.avatar_png || '/default.png'}/>
    <button>Upload your image</button>
    <h1>Gamertag: {userData.GamerTag}</h1>
    <p>Email: {userData.email}</p>
    <p>Bio: {userData.bio}</p>
    <p>Platforms: {userData.platforms}</p>
    <p>Channel Links: {userData.channelLinks}</p>
    <button>Update profile</button>
  </div>;
}
