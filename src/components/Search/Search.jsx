/* eslint-disable max-len */
import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import useSearchResults from '../../hooks/use-search-results';
import { FormButton } from '../Forms/FormController';




export default function Search() {
  const {
    infiniteScrollRef,
    nextPage,
    games,
    setGames,
    // searchParams,
    searchResults,
    searchGames,
  } = useSearchResults();
  return <section>
    <SearchForm games={games} setGames={setGames} onSubmit={searchGames} />
    <SearchResults results={searchResults} infiniteScrollRef={infiniteScrollRef}/>
    <FormButton onClick={nextPage}>More Games</FormButton>
  </section>;
}
