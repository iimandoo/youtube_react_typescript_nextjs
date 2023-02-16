// import ChannelInfo from 'components/common/channel/ChannelInfo';
import ChannelInfo from 'components/common/channel/ChannelInfo';
import { VideoShowItemModel } from 'models/show/ShowModel';
import React from 'react';

type Props = {
  item: VideoShowItemModel;
};

const Video = (props: Props) => {
  const {
    snippet: { title, description, channelId, channelTitle },
  } = props.item;

  return (
    <section className='w-full lg:w-4/6'>
      <article className='flex flex-col gap-2'>
        <div className='relative' style={{ paddingBottom: '56%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${props.item.id}`}
            title='YouTube video player'
            className='absolute inset-0 w-full aspect-video border-none'></iframe>
        </div>
        <h1 className='text-xl'>{title}</h1>
        <ChannelInfo channelId={channelId} channelTitle={channelTitle}></ChannelInfo>
        <p className=' whitespace-pre-wrap'>{description}</p>
      </article>
    </section>
  );
};

export default Video;
