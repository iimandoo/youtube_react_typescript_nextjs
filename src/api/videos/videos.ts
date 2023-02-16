import { VideoSearchResponseModel } from 'models/videos/VideoModel';
import axios, { AxiosResponse, AxiosError } from 'axios';
import HostManager from 'util/EnvironmentManager';

export const getSearch = async (data?: string) => {
  const localUrl = `${process.env.REACT_APP_LOCAL_HOST}data/${data ? 'search' : 'default'}videos.json`;
  const serverUrl = `${process.env.REACT_APP_YOUTUBE_URL}search?part=snippet&maxResults=25&q=${data}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;

  const url = HostManager.isLocal ? localUrl : serverUrl;

  return await axios
    .get<AxiosResponse<VideoSearchResponseModel>>(url)
    .then((res) => res)
    .catch((err: AxiosError) => {
      return {
        statusCode: err.code || err.name || err.status,
        statusText: err.message,
      };
    });
};
