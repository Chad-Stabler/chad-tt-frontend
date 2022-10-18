/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { useState } from 'react';
import { uploadVideo } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function ProfileCreateForm() {
  const [clip, setClip]  = useState({ clip_link: '', o_site: '', title: '', description: '' });
  const [details, handleChange] = useForm({
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
    } else {
      const vidId = details.clip_link.split('clip/')[1];
      const twitchFormat = `https://clips.twitch.tv/embed?clip=${vidId}`;
      details.clip_link = twitchFormat;
    }
    await uploadVideo(details);
  };



  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <h2>CREATE NEW VIDEO</h2>
      <label>
            Stream Service
        <select required onChange={handleChange} name="o_site" label="o_site">
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
        required
        onChange={handleChange}
      />
      {<InputController
        label="description"
        name="description"
        type="text"
        onChange={handleChange}
      />}
      <InputController
        label="clip link"
        name="clip_link"
        type="text"
        required
        onChange={handleChange}
      />

      <FormButton onSubmit={handleSubmit}>submit</FormButton>
    </form>
  );}