import { getAllUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './communityPage.css';

export default function CommunityCard() {
  const [usersData, setUsersData] = useState([]);
 
  async function fetchUserData() {
    const data = await getAllUserData();
    setUsersData(data);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return <div className={styles.CommunityPage}>
    {
      usersData.map((userData, i) => 
        <div className={styles.UserData}
          key={userData.GamerTag + i}>
          <p>{userData.GamerTag}</p>
          <p>{userData.platforms}</p>
        </div>
      )}
  </div>;
}
