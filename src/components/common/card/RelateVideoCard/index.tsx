import React from 'react';
import Link from 'next/link';
import VideoDescription from '../../VideoDescription';
import { VideoModel } from 'models/videos/VideoModel';
import Image from 'next/image';

type Props = {
  item: VideoModel;
};

const RelateVideoCard = (props: Props) => {
  const { channelId, title, thumbnails } = props.item.snippet;
  const videoId = props.item.id.videoId;

  return (
    <li key={`${channelId}${videoId}`} className='w-full pl-2 mb-5 rounded-xl'>
      <Link href={`/show/${videoId}`} className='flex flex-row gap-3'>
        <Image src={thumbnails.default.url} alt={title} className='rounded-xl' width={120} height={90} />
        <VideoDescription item={props.item} />
      </Link>
    </li>
  );
};

export default RelateVideoCard;
