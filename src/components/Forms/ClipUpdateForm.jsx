/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { useState } from 'react';
import { updateVideo } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function ClipUpdateForm({ fetchVideos, setActive, clipId }) {
  const [clip, setClip]  = useState({ title: '', description: '' });
  const [details, handleChange, reset] = useForm({
    title: '',
    description: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVideo(details, clipId);
    fetchVideos();
    setActive(false);
    reset();
  };



  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h1>Update details</h1>
      <InputController
        label="title"
        name="title"
        type="text"
        value={details.title}
        required
        onChange={handleChange}
      />
      {<InputController
        label="description"
        name="description"
        type="text"
        value={details.description}
        onChange={handleChange}
      />}

      <FormButton onSubmit={handleSubmit}>submit</FormButton>
    </form>
  );
}
