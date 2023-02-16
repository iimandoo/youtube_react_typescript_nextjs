import { VideoShowModel } from 'models/show/ShowModel';
import axios, { AxiosResponse } from 'axios';

export const getShow = async (data?: string) => {
  const url = `${process.env.REACT_APP_YOUTUBE_URL}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${data}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
  return await axios.get<AxiosResponse<VideoShowModel>>(url);
};
