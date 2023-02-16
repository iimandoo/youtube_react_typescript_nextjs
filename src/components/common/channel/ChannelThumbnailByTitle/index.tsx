import React from 'react';

type Props = {
  channelTitle: string;
};

export const ChannelThumbnailByTitle = (props: Props) => {
  const { channelTitle } = props;

  return (
    <span className='channel-thumbnail-md rounded-full bg-slate-400 flex items-center justify-center'>
      {channelTitle.substring(0, 1)}
    </span>
  );
};
