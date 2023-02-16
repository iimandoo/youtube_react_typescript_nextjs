import React, { useState } from 'react';
import { useChannelDetailQuery } from 'api/channel/useChannelDetailQuery';
import { ChannelModel } from 'models/channels/ChannelModel';
import { ChannelThumbnailByTitle } from 'components/common/channel/ChannelThumbnailByTitle';
import ImageAutoSize from 'components/common/ImageAutoSize';

type Props = {
  channelId: string;
  channelTitle: string;
};

const ChannelInfo = (props: Props) => {
  const { channelId, channelTitle } = props;
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();
  const [channelDetail, setChannelDetail] = useState<ChannelModel>();

  useChannelDetailQuery(channelId, {
    onSuccess: (res) => {
      const item: ChannelModel | undefined = res.data?.items.find((item: ChannelModel) => item?.id === channelId);
      setChannelDetail(item);
      setThumbnailUrl(item?.snippet.thumbnails.default.url);
    },
    onError: (err: any) => console.log(`err: ${err}`),
  });

  return (
    <div className='flex flex-row gap-2 items-center'>
      {thumbnailUrl ? (
        <ImageAutoSize src={thumbnailUrl} alt={channelTitle} className='channel-thumbnail-md rounded-full' />
      ) : (
        <ChannelThumbnailByTitle channelTitle={channelTitle} />
      )}
      <div className='flex flex-col gap-1'>
        <span className='font-light text-md'>{channelTitle}</span>
        <span className='text-xs font-light text-gray-600'>
          {Number(channelDetail?.statistics.subscriberCount).toLocaleString('en')} subscribers
        </span>
      </div>
    </div>
  );
};

export default ChannelInfo;
