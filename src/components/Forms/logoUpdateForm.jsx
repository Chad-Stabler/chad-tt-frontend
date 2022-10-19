/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { SelectControl, FormButton } from './FormController.jsx';
import { useForm } from './useForm.js';
import { updateLogo } from '../../services/fetch-utils.js';
import styles from '../Auth/Auth.css';

export default function ProfileCreateForm({ fetchUser, setLogoForm, userId }) {
  const [details, handleChange, reset] = useForm({
    avatar_png: '' 
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateLogo(details, userId);
    fetchUser();
    setLogoForm(false);
    reset();
  };

  return (
    <form className={styles.AuthForm} onSubmit={handleSubmit}>
      <img src={details.avatar_png || 'default.png'}/>
      <SelectControl label="Logos" name="avatar_png" required value={details.avatar_png} onChange={handleChange}>
        <option value="default.png">Default</option>
        <option value="rhino.jpg">Rhino</option>
        <option value="rocket-league.png">Rocket League</option>
        <option value="nuke.png">Nuclear</option>
      </SelectControl>
      <FormButton onSubmit={handleSubmit}>Change</FormButton>
    </form>
  );
}
