import { del, get, post } from './request.js';

const URL = 'https://myst-backend.herokuapp.com/api/v1/users';
//this is where the routes need to match with the BE 'aka api/v1/users


export async function insert(credentials) {
  const response = await post(`${URL}`, credentials);
  response.user = response.data;
  return response;
}

export async function getByEmail(credentials) {
  const response = await post(`${URL}/sessions`, credentials);
  response.user = response.data;
  return response;
}

export async function signOutUser() {
  const response = await del(`${URL}/signout`);
  return response;
}

export async function verifyUser(credentials) {
  const response = await get(`${URL}/me`, credentials);
  response.user = response.data;
  return response;
}
const USER_KEY = 'USER';

export function storeLocalUser(user) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

export function getLocalUser() {
  const json = localStorage.getItem(USER_KEY);
  try {
    if (json) {
      return JSON.parse(json);
    }
  } catch (e) {
    storeLocalUser();
  }
}
