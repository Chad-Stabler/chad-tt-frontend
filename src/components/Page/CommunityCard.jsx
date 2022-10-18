import { getAllUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './CommunityPage.css';

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
    <div className={styles.CommunityPage}>
      {
        usersData.map((userData, i) => 
          <div className={styles.CommunityPage}
            key={userData.GamerTag + i}>
            <p>{userData.platforms}</p>
          </div>
        )}
    </div>
  </div>;
}
