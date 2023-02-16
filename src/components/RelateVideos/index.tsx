import React from 'react';
import { useRelateVideosQuery } from 'api/videos/useRelateVideosQuery';
import RelateVideoCard from 'components/common/card/RelateVideoCard';
import { VideoModel } from 'models/videos/VideoModel';
import Loading from 'components/common/Loading';
import Error from 'components/common/Error';

type Props = {
  channelId?: string;
};

const RelateVideos = (props: Props) => {
  const { data, isLoading, isError } = useRelateVideosQuery(props.channelId ?? '');
  return (
    <section className='w-full lg:w-2/6 pt-5 mt-5 border-t border-gray-500 sm:mt-0 sm:border-none sm:pt-0'>
      <ul>
        {data?.items?.map((item: VideoModel) => {
          return <RelateVideoCard key={item.id.videoId} item={item} />;
        })}
      </ul>
      <Error />
      {isLoading && <Loading />}
      {isError && <Error />}
    </section>
  );
};

export default RelateVideos;
