import { createContext, useContext, useEffect, useState } from 'react';
// eslint-disable-next-line max-len
import { getByEmail, signOutUser, insert, getLocalUser, verifyUser, storeLocalUser } from '../services/auth.js';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const localUser = getLocalUser();
  const [user, setUserState] = useState(localUser);
  
  const verify = async () => {
    const response = await verifyUser();
    setUser(response.user || null);
  };
  
  useEffect(() => {
    verify();
  }, []);
  
  const setUser = (user) => {
    storeLocalUser(user);
    setUserState(user);
  };

  const value = {
    user,
    setUser,
  };
    
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// export function UseUser() {
//   const { user } = useContext(UserContext);
//   return user;
// }

export function useAuth() {
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const handleResponse = ({ user, error }) => {
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
    }
  };

  const signUp = async (credentials) => {
    const response = await insert(credentials);
    handleResponse(response);
  };

  const signIn = async (credentials) => {
    const response = await getByEmail(credentials);
    handleResponse(response);
  };

  const signOut = async () => {
    const response = await signOutUser();
    handleResponse(response);
  };

  return { signUp, signIn, signOut, error };

}


