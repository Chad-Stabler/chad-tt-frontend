import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { Outlet } from 'react-router-dom';
import {
  getGamesList,
  createGameFavorite,
  createGameList,
  deleteGame,
  updateFavorites
} from '../services/games.js';

const GameListContext = createContext();

export default function GameListProvider() {
  const [gameLists, setGameLists] = useState([]);
  const [gameById, setGameById] = useState({});


  //show all catalog
  const fetchGameList = async () => {
    const { data, error } = await getGamesList();

    if (error) {
      console.log(error);
    } 
    if (data) {
      setGameLists(data);
      const map = data.reduce((map, gameList) => {
        map[gameList.id] = gameList;
        return map;
      }, {});
      setGameById(map);
    } 
  };

  useEffect(() => {
    fetchGameList();
  }, []);
  //adds to the game catalogue
  const addGame = (gameList) => {
    setGameLists((gameLists) => [...gameLists, gameList]);
    setGameById((gameById) => ({
      ...gameById, 
      [gameList.id]: gameList,
    }));
  };

  const updateFavorites = (update) => {
    setGameLists((gameLists) => 
      // eslint-disable-next-line max-len
      gameLists.map((gameList) => (gameList.id === update.id ? update : gameList))
    );
    setGameById((gameById) => ({
      ...gameById,
      [update.id]: update,
    }));
  };


  const value = {
    gameLists,
    setGameLists,
    gameById,
    setGameById,
    addGame,
    updateFavorites
  };

  return (
    <GameListContext.Provider value={value}>
      <Outlet />
    </GameListContext.Provider>
  );
}


export function useGames() {
  const [error, setError] = useState(null);
  const { gameLists, setGameLists } = useContext(GameListContext);
  
  const addGame = async (gameList) => {
    const { data, error } = await createGameList(gameList);
    if (error) {
      setError(error.message);
    } else {
      setGameLists((gameLists) => [...gameLists, data]);
      setError(null);
    }
  };
  
  return { error, addGame, gameLists };
}

//Adds to the favorites list
export function useGame(id) {
  const { gameById, updateFavList } = useContext(GameListContext);
  const [error, setError] = useState(null);
  //   const { game, setGame } = useContext(GameListContext);
  const gameId = gameById[id];

  const addFavoriteGame = async (game) => {
    const { data, error } = await createGameFavorite(id, game);

    if (error) {
      setError(error.message);
    } else {
      const updatedFavList = { ...gameId, games: [...gameId.games, data] };
      updateFavList(updatedFavList);
      //   setGame((game) => [...game, data]);
      setError(null);
    }
  };

  const removeFavoriteGame = async (gameById) => {
    const { error } = await deleteGame(id, gameById);
    if (error) {
      setError(error.message);
    } else {
      const updateFavList = {
        ...gameById,
        game: gameById.game.filter((game) => game.id !== gameById),
      };
      updateFavList(updateFavList);
      setError(null);
    }
  };    


  return {
    removeFavoriteGame, error, updateFavorites, addFavoriteGame
  };
}
export function useSearchForm() {
  const { gameLists, setGameLists } = useContext(GameListContext);
    
  return {
    gameLists,
    setGameLists,
  };
}

