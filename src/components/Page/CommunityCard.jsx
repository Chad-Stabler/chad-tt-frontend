import { getAllUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './Profile.css';

export default function CommunityCard() {
  const [usersData, setUsersData] = useState([]);
 
  async function fetchUserData() {
    const data = await getAllUserData();
    console.log(data);
    setUsersData(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return <div className={styles.ProfileCss}>
    <div className={styles.ProfileCss}>
      {
        usersData.map((userData, i) => 
          <div className={styles.ProfileCss}
            key={userData.GamerTag + i}>
            <h2>{userData.GamerTag}</h2>
            <img src={userData.avatar_png || '/default.png'}/>
            <p>{userData.platforms}</p>
          </div>
        )}
    </div>
  </div>;
}
