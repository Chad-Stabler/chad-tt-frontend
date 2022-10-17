import { get } from './request.js';

export async function getUserVideos() {
  const clips = await get(`${process.env.CLIP_URL}/user`);
  return clips.data;
}

export async function getUserData() {
  const user = await get(`${process.env.USER_URL}/me`);
  return user.data;
}
