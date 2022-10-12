

// eslint-disable-next-line max-len
const URL = 'https://api.rawg.io/api/games?key=bb156bb75d5f49a3b8d86648ed1bffc6&search=';
//this is where the routes need to match with the BE 'aka api/v1/users

export async function searchGame(search) {
  const res = await fetch(URL + search.Games);
  return await res.json();
}
