import { getUserData } from '../../services/fetch-utils';
import ProfileUpdateForm from '../Forms/ProfileUpdateForm';
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
  const [active, setActive] = useState(false);

  async function fetchUserData() {
    const data = await getUserData();
    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  
  function handleActive() {
    setActive(true);
  }
  return <div className={styles.ProfileCard}>
    <img src={userData.avatar_png || '/default.png'}/>
    <button>Upload your image</button>
    <h1>Gamertag: {userData.GamerTag}</h1>
    <p>Email: {userData.email}</p>
    <p>Bio: {userData.bio}</p>
    <p>Platforms: {userData.platforms}</p>
    <p>Channel Links: {userData.channelLinks}</p>
    <button onClick={handleActive}>Update profile</button>
    <div className={active ? styles.on : styles.off}>
      <ProfileUpdateForm fetchUser={fetchUserData}
        setActive={setActive} userId={userData.id} />
    </div>
  </div>;
}
