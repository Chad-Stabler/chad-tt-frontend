/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { useState } from 'react';
import { updateProfile } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function ProfileCreateForm({ fetchUser, setActive, userId }) {
  const [profile, setProfile]  = useState({ bio: '', platforms: '', channelLinks: '' });
  const [details, handleChange, reset] = useForm({
    bio: '', platforms: '', channelLinks: '' 
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProfile(details, userId);
    fetchUser();
    setActive(false);
    reset();
  };

  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>Update your info</h2>
      
      <InputController
        label="Bio"
        name="bio"
        type="text"
        value={details.bio}
        onChange={handleChange}
      />

      <InputController
        label="Platforms"
        name="platforms"
        type="text" 
        value={details.platforms}
        onChange={handleChange}
      />

      <InputController
        label="Channel Links"
        name="channelLinks"
        type="text"
        value={details.channelLinks}
        onChange={handleChange}
      />

      <FormButton onSubmit={handleSubmit}>submit</FormButton>
    </form>
  );}
