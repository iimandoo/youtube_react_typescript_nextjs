import axios from 'axios';
import { RelateVideosResponseModel } from 'models/videos/VideoModel';

export const relatevideos = async (data: string) => {
  const url = `/data/relatevideos.json?${data}`;

  return await axios.get<RelateVideosResponseModel>(url);
};
