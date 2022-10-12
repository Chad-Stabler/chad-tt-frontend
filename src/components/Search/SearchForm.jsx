
import { InputController, FormButton } from '../Forms/FormController.jsx';
import useSearchForm from '../../state/GameContext.jsx';
import styles from './Search.css';
import { searchGame } from '../../services/gameAPI.js';


export default function SearchForm() {
  const { setGameLists } = useSearchForm();

  
  

  
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    const data = searchGame(formDataObject);
    setGameLists(data);
    
  };

  return (<form onSubmit ={formSubmit}>
    <InputController className = {styles.InputController}
      type="text"
      name="Games"
      onChange={e => setGameLists(e.target.value)}
    />
    <FormButton className = {styles.FormButton} type = "submit">
        Search
    </FormButton>
  </form>);


}
