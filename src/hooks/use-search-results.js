import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../services/games';
import { useInView } from 'react-intersection-observer';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  
  const useableSearchParams = Object.fromEntries(searchParams.entries());

  const nextPage = async () => {
    useableSearchParams.page = parseInt(useableSearchParams.page) + 1;
    setSearchParams(useableSearchParams);
    const moreResults = await search(useableSearchParams);
    setSearchResults(searchResults.concat(moreResults.results));
  };

  const infinScrollRef = useInView({
    triggerOnce:true,
    onchange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;

  const searchGames = async (searchObj) => {
    if (searchObj.page == null) {
      searchObj.page = 1;
    }
    setSearchParams(searchObj);
    try { 
      const body = await search(searchObj);
      setSearchResults(body.results);
    } catch (e) {
      
      setError('Error' + e.toString());
    }
  };
  useEffect(() => void searchGames(useableSearchParams), []);

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    searchGames,
    infinScrollRef,
    error,
  };

}

