import { get } from './request.js';

export async function getUserVideos() {
  const clips = await get(`${process.env.API_URL}/user`);
  return clips.data;
}

