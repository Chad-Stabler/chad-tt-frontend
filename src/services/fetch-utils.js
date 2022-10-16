import { get } from './request.js';

export async function getUserVideos() {
  const clips = await get('http://localhost:7890/api/v1/clips/user');
  return clips.data;
}

