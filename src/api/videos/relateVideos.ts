import axios from 'axios';
import { RelateVideosResponseModel } from 'models/videos/VideoModel';

export const relatevideos = async (data: string) => {
  return await axios.get<RelateVideosResponseModel>(`/data/relatevideos.json?${data}`);
};
