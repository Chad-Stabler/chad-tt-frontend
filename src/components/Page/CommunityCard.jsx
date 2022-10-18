import { getAllUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Profile.css';

export default function CommunityCard() {
  const [usersData, setUsersData] = useState({
    GamerTag: '',
    platforms: '',
    avatar_png: '',
  });
 
  async function fetchUserData() {
    const data = await getAllUserData();
    setUsersData(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return <div className={styles.CommunityCard}>
    <div className={styles.CommunityRoster}>
      {
        usersData.map((userData, i) => <div className={styles.RosterCard}
          key={userData.userData.GamerTag + i}>
          {userData === userData.GamerTag}
          <h2>{userData.GamerTag}</h2>
          <img src={usersData.avatar_png || '/default.png'}/>
          <p>{userData.platforms}</p>
        </div>
        )}
    </div>
  </div>;
}
