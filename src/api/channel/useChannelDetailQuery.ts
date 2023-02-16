import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { getChannelThumbnail } from './channel';
import { ChannelsResponseModel } from 'models/channels/ChannelModel';

const CHANNEL_THUMBNAIL_QUERY_KEY = 'CHANNEL_THUMBNAIL_QUERY_KEY';

const useChannelDetailQuery = (
  queryString: string,
  queryOption?: UseQueryOptions<AxiosResponse<ChannelsResponseModel>>,
) => {
  const queryResult = useQuery<AxiosResponse<ChannelsResponseModel>>(
    [CHANNEL_THUMBNAIL_QUERY_KEY, queryString],
    async () => getChannelThumbnail(queryString),
    queryOption,
  );
  return { ...queryResult, data: queryResult.data?.data };
};

export { useChannelDetailQuery };
