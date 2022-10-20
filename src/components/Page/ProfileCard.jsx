import { getUserData } from '../../services/fetch-utils';
import ProfileUpdateForm from '../Forms/ProfileUpdateForm';
import LogoUpdateForm from '../Forms/logoUpdateForm';
import { useState, useEffect } from 'react';
import styles from './Profile.css';
import { useUser } from '../../state/UserContext';

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
  const [logoForm, setLogoForm] = useState(false);
  const { setUser } = useUser();

  async function fetchUserData() {
    const data = await getUserData();
    setUserData(data);
    setUser(data);
  }


  useEffect(() => {
    fetchUserData();
  }, []);
  
  function handleActive() {
    setActive(!active);
  }

  function handleLogoForm() {
    setLogoForm(!logoForm);
  }

  return <div className={styles.ProfileCard}>
    <img src={userData.avatar_png || '/default.png'}/><br/>
    <button onClick={handleLogoForm}>Pick your profile logo</button>
    <div className={logoForm ? styles.on : styles.off}>
      <LogoUpdateForm fetchUser={fetchUserData} 
        setLogoForm={setLogoForm} userId={userData.id}/>
    </div>
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
    <button onClick={handleActive}>Update profile</button>
    <div className={active ? styles.on : styles.off}>
      <ProfileUpdateForm fetchUser={fetchUserData}
        setActive={setActive} userId={userData.id} />
    </div>
  </div>;
}
