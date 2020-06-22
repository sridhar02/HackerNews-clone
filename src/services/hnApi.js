import axios from "axios";
import { SelectFields } from "../selectors/SelectFileds";

export const baseUrl = process.env.REACT_APP_BACKEND_API;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && SelectFields(data));

  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);

  return result;
};
