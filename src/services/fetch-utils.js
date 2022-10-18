/* eslint-disable max-len */
import { get, post } from './request.js';


export async function uploadVideo({ clip_link, description, o_site, title }) {
  const newClip = await post(`${process.env.CLIP_URL}/user`, { clip_link, description, o_site, title });
  return newClip;
}

export async function getUserVideos() {
  const clips = await get(`${process.env.CLIP_URL}/user`);
  return clips.data;
}



export async function getUserData() {
  const user = await get(`${process.env.USER_URL}/me`);
  return user.data;
}






















export async function getAllUserData() {
  const users = await get(`${process.env.USER_URL}`);
  console.log(users.data);
  return users.data;
}

export async function getAllVideos() {
  const allClips = await get(`${process.env.USER_URL}`);
  return allClips.data;
}

