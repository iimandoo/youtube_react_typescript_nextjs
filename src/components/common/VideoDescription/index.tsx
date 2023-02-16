import React from 'react';
import { VideoModel } from 'models/videos/VideoModel';
import ReactTimeago from 'react-timeago';

type Props = {
  item: VideoModel;
};

export default function VideoDescription(props: Props) {
  const { title, channelTitle, publishedAt } = props.item.snippet;

  return (
    <>
      <div className='video-card-description'>
        <span className='font-bold line line-clamp-2'>{title}</span>
        <span>{channelTitle}</span>
        <span>
          <ReactTimeago date={publishedAt} />
        </span>
      </div>
    </>
  );
}
