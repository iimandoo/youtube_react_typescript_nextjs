import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { relatevideos } from './relateVideos';
import { RelateVideosResponseModel } from 'models/videos/VideoModel';

const RELATE_VIDEOS_QUERY_KEY = 'RELATE_VIDEOS_QUERY_KEY';

const useRelateVideosQuery = (queryString: string) => {
  const queryResult = useQuery<AxiosResponse<RelateVideosResponseModel>>(
    [RELATE_VIDEOS_QUERY_KEY, queryString],
    async () => relatevideos(queryString),
  );
  return { ...queryResult, data: queryResult.data?.data };
};

export { useRelateVideosQuery };
