import { VideoSearchResponseModel } from 'models/videos/VideoModel';
import axios, { AxiosResponse, AxiosError } from 'axios';
import HostManager from 'util/EnvironmentManager';

export const getShow = async (data?: string) => {
  const localUrl = `${process.env.REACT_APP_LOCAL_HOST}data/show${data}.json`;
  const serverUrl = `${process.env.REACT_APP_YOUTUBE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${data}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;

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
