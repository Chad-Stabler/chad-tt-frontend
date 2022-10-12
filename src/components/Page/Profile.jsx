import React from 'react';
import styles from '../Page/Profile.css';
import SearchForm from '../Search/SearchForm.jsx';
import { FormButton  } from '../Forms/FormController.jsx';
import SearchResultCard from '../Search/SearchResultsCard';
import useSearchForm from '../../state/GameContext';





export default function Profile() {
  const { gameLists } = useSearchForm();
  return <section className={styles.ProfileCss}>
    <SearchForm
      type="text"
      searchText="text"
      
    />

  </section>;

}
