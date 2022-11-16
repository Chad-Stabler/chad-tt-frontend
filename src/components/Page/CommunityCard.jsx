import { getAllUserData } from '../../services/fetch-utils';
import { useState, useEffect } from 'react';
import styles from './communityPage.css';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../state/UserContext';

export default function CommunityCard() {
  const [usersData, setUsersData] = useState([]);
  const { user } = useUser();
  
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
        user.id !== userData.id ?
          <NavLink to={`user/${userData.id}`} className={styles.UserData}
            key={userData.GamerTag + i}>
            <img src={`${userData.avatar_png}`}/>
            <p>{userData.GamerTag}</p>
            <p>{userData.platforms}</p>
          </NavLink>
          :
          <></>
      )}
  </div>;
}
