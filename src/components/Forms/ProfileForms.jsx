/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { useState, useEffect } from 'react';
import { uploadVideo } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function ProfileCreateForm({ onSubmit }) {
  const [clip, setClip]  = useState({ clip_link: '', o_site: '', title: '', description: '' });
  const [details, handleChange] = useForm({
    clip_link: '',
    title: '',
    description: '',
    o_site: ''
  });
  console.log(details);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadVideo(clip);
  };
  // function useForm(formData) {
  //   const { getValue } = useForm();
  //   const [data, setData] = useState(formData ?? {});
    
  //   useEffect(() => {
  //     setData(formData ?? {});
  //   }, [formData]);
  // }
    
  // const handleChange = ({ target }) => {
  //   setData((data) => ({
  //     ...data,
  //     [target.description]: getValue(target),
  //     [target.clip_link]: getValue(target),
  //     [target.title]: getValue(target),
  //     [target.option]: getValue(target)
  //   }));
  //   return [data, handleChange];
  // };



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
        required
        onChange={handleChange}
      />}
      <InputController
        label="clip link"
        name="clip_link"
        type="text"
        required
        onChange={handleChange}
      />

      <FormButton>submit</FormButton>
      <p className="error">error</p>
    </form>
  );}
