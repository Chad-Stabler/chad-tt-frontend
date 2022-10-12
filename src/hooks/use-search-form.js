import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const useableSearchParams = Object.fromEntries(searchParams.entries());
  const [games, setGames] = useState(useableSearchParams.games || '');
  
  return {
    games,
    searchParams: useableSearchParams,
    setGames,
    setSearchParams,
  };
}
