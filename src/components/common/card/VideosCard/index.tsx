import React from 'react';
import VideoDescription from 'components/common/VideoDescription';
import { VideoModel } from 'models/videos/VideoModel';
import Link from 'next/link';
import ImageAutoSize from 'components/common/ImageAutoSize';

type Props = {
  item: VideoModel;
};

export default function VideosCard(props: Props) {
  const { thumbnails, title } = props.item.snippet;
  const videoId = props.item.id.videoId;

  return (
    <li className='video-card'>
      <Link href={`/show/${videoId}`}>
        <ImageAutoSize src={thumbnails.medium.url} alt={title} />
        <VideoDescription item={props.item} />
      </Link>
    </li>
  );
}
