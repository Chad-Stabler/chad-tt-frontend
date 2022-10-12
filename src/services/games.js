import { del, get, post, put } from './request.js';

const URL = 'https://myst-backend.herokuapp.com/api/v1/games';
//this is where the routes need to match with the BE 'aka api/v1/users

export async function getGamesList() {
  return await get(URL);
}

export async function createGameList(list) {
  return await post(URL, list);
}
// this pathing will be specific to the backend syntax
export async function createGameFavorite(id, game) {
  return await post(`${URL}/${id}/games`, game);
}
// this gameId and gameList are user specific (favorites) games
export async function deleteGame(gameId, gameList) {
  return await del(`${URL}/${gameId}/games/${gameList}`);
}
//updates the favorite list
export async function updateFavorites(gameId, gameList, updates) {
  return await put(`${URL}/${gameId}/games/${gameList}`, updates);
}

// export async function searchGames(gameObj) {
//   return await get();
// }
