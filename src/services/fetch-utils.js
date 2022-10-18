/* eslint-disable max-len */
import { get, post, del } from './request.js';


export async function uploadVideo({ clip_link, description, o_site, title }) {
  const newClip = await post(`${process.env.CLIP_URL}/user`, { clip_link, description, o_site, title });
  return newClip;
}

export async function getUserVideos() {
  const clips = await get(`${process.env.CLIP_URL}/user`);
  return clips.data;
}

export async function deleteVideo(clipId) {
  const deletedClip = await del(`${process.env.CLIP_URL}/${clipId}`);
  return deletedClip.data;
}



export async function getUserData() {
  const user = await get(`${process.env.USER_URL}/me`);
  return user.data;
}
