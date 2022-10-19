/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { InputController, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { postComment } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function CommentForm({ setActive, fetchVideos, userId, clipId }) {
  const [details, handleChange, reset] = useForm({
    details: '',
    commenter_id: userId,
    clip_id: clipId
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postComment(details);
    fetchVideos();
    setActive(false);
    reset();
  };



  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <InputController
        label="Comment:"
        name="details"   
        type="text"
        value={details.details}
        required
        onChange={handleChange}
      />
      <FormButton onSubmit={handleSubmit}>submit</FormButton>
    </form>
  );
}
