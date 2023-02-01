/* eslint-disable max-len */
import { get, post, del, put } from './request.js';


export async function uploadVideo({ clip_link, description, o_site, title }, id) {
  const newClip = await post(`${process.env.CLIP_URL}/user/${id}`, { clip_link, description, o_site, title });
  return newClip;
}

export async function getUserVideos(id, from = 0, to = 7) {
  const clips = await get(`${process.env.CLIP_URL}/user/${id}`);
  const data = clips.data;

  return data.slice(from, to);
}

export async function deleteVideo(clipId) {
  const deletedClip = await del(`${process.env.CLIP_URL}/${clipId}`);
  return deletedClip.data;
}

export async function updateVideo(updateObj, clipId) {
  const update = await put(`${process.env.CLIP_URL}/${clipId}`, updateObj);

  return update.data;
}

export async function updateProfile(updateObj, user_id) {
  const update = await put(`${process.env.USER_URL}/${user_id}`, updateObj);

  return update.data;
}

export async function updateLogo(updateObj, user_id) {
  const update = await put(`${process.env.USER_URL}/logo/${user_id}`, updateObj);

  return update.data;
}

export async function getUserData() {
  const user = await get(`${process.env.USER_URL}/me`);
  return user.data;
}

export async function getCommenterData(id) {
  const user = await get(`${process.env.USER_URL}/${id}`);

  return user.data;
}

export async function getAllUserData() {
  const users = await get(`${process.env.USER_URL}`);
  return users.data;
}

export async function getAllVideos() {
  const allClips = await get(`${process.env.CLIP_URL}`);
  return allClips.data;
}

export async function postComment(obj) {
  const comment = await post(`${process.env.CLIP_URL}/comment`, obj);

  return comment.data;
}

export async function addUpvote(clipId, userId) {
  const upVote = {
    vote_up: true,
    clip_id: clipId,
    voter_id: userId
  };

  const vote = await post(`${process.env.CLIP_URL}/vote`, upVote);

  return vote.data;
}
export async function addDownvote(clipId, userId) {
  const upVote = {
    vote_up: false,
    clip_id: clipId,
    voter_id: userId
  };

  const vote = await post(`${process.env.CLIP_URL}/vote`, upVote);

  return vote.data;
}
