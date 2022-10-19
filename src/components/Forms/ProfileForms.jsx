/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { uploadVideo } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';
import { useState } from 'react';

export default function ProfileCreateForm({ setActive, fetchVideos }) {
  const [error, setError] = useState('');
  const [details, handleChange, reset] = useForm({
    clip_link: '',
    title: '',
    description: '',
    o_site: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (details.o_site === 'youtube') {
      const vidId = details.clip_link.split('v=')[1];
      details.clip_link = vidId;
    } else if (details.o_site === 'twitch') {
      const vidId = details.clip_link.split('clip/')[1];
      const twitchFormat = `https://clips.twitch.tv/embed?clip=${vidId}`;
      details.clip_link = twitchFormat;
    } else {
      setError('Something went wrong creating the clip, please try again');
      return;
    }
    await uploadVideo(details);
    fetchVideos();
    reset();
    setActive(false);
  };

  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>Create new clip</h2>
      <label>
            Stream Service
        <select required value={details.o_site} onChange={handleChange} name="o_site" label="o_site">
          <option defaultValue="">
                Select a Service
          </option>
          <option value="youtube">YouTube</option>
          <option value="twitch">Twitch</option>
        </select>
      </label>
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
      <InputController
        label="clip link"
        name="clip_link"
        type="text"
        value={details.clip_link}
        required
        onChange={handleChange}
      />
      <p>{error}</p>
      <FormButton onSubmit={handleSubmit}>submit</FormButton>
    </form>
  );}
