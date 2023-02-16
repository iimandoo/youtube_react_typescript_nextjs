import { VideoSearchResponseModel } from 'models/videos/VideoModel';
import axios, { AxiosResponse } from 'axios';

export const getSearch = async (data?: string) => {
  const url = `${process.env.REACT_APP_YOUTUBE_URL}search?part=snippet&maxResults=25&q=${data}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
  return await axios.get<AxiosResponse<VideoSearchResponseModel>>(url);
};
