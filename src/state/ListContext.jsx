/* eslint-disable max-len */
import { 
  createContext,
  useContext,
  useState,
  useEffect,

} from 'react';
import { Outlet } from 'react-router-dom';
import { 
  createList,
  createFav,
  deleteGameFav,
  getLists,
} from '../services/list.js';

const ListsContext = createContext();

export default function ListsProvider({ children }) {
  const [lists, setLists] = useState(null);
  const [listsById, setListsById] = useState({});

  const fetchLists = async () => {
    const { data, error } = await getLists();
        
    if (error) {
      console.log(error);
    }
    if (data) {
      setLists(data);
      const map = data.reduce((map, list) => {
        map[list.id] = list;
        return map;
      }, {});
      setListsById(map);
    }
  };
  useEffect(() => {
    fetchLists();
  }, []);
  const addList = (list) => {
    setLists((lists) => [...lists, list]);
    setListsById((listsById) => ({
      ...listsById,
      [list.id]: list,
    }));
  };
  const updateList = (updated) => {
    setLists((lists) => lists.map((list) => (list.id === updated.id ? updated : list))
    );
    setListsById((listsById) => ({
      ...listsById,
      [updated.id]: updated, 
    }));
  };       


  const value = {
    lists,
    setLists,
    listsById,
    addList,
    updateList,
  };


  return (
    <ListsContext.Provider value={value}>
      {children || <Outlet />}
    </ListsContext.Provider>
  );
}

export function useLists() {
  const [error, setError] = useState(null);
  const { lists, setLists } = useContext(ListsContext);

  const addList = async (list) => {
    const { data, error } = await createList(list);
    if (error) {
      setError(error.message);
    } else { 
      setLists((lists) => [
        ...lists, data
      ]);
      setError(null);
    }
  };
  return { lists, error, addList };
}


export function useList(id) {
  const { listsById, updateList } = useContext(ListsContext);
  const [error, setError] = useState(null);
  const list = listsById[id];

  const addFav = async (fav) => {
    const { data, error } = await createFav(id, fav);

    if (error) {
      setError(error.message);
    } else {
      const updatedList = { ...list, games: [...list.games, data] };
      updateList(updatedList);
      setError(null);
    }
  };
  const removeFav = async (gameId) => {
    const { error } = await deleteGameFav(id, gameId);

    if (error) {
      setError(error.message);
    } else {
      const updatedList = {
        ...list,
        games: list.games.filter((game) => game.id !== gameId),
      };
      updateList(updatedList);
      setError(null);
    }
  };
  return {
    list,
    addFav,
    removeFav,
    error,
  };
}





