import { ChannelsResponseModel } from 'models/channels/ChannelModel';
import axios from 'axios';

export const getChannelThumbnail = async (data: string) => {
  return await axios.get<ChannelsResponseModel>(`/data/channel.json?${data}`);
};
