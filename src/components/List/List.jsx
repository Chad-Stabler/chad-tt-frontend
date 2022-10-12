import { Link } from 'react-router-dom';
import { useLists } from '../../state/ListContext';
import AddForm from '../Forms/AddForm';
import styles from './List.css';


export function Lists() { 
  const { lists, addList } = useLists();
  if (!Lists) return null;
  const handleAdd = async (name) => {
    await addList({ name });
  };

  return (
    <section className={styles.Lists}>
      <h2>
            Favorite
      </h2>

      <AddForm onAdd = {handleAdd} placeHolder="make a new favorite list"/>


      <ul>
        {lists.map((list) => {
          <li key={list.name}>
            <Link to={`${list.name}`}>
              {list.name}
            </Link>
          </li>;
        })
        });
      </ul>
    </section>
  );


}



