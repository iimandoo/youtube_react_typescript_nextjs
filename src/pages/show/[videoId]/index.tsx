import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { AxiosResponse } from 'axios';
import { ErrorPageProps } from '../../_error';
import { getShow } from 'api/videos/show';
import { VideoShowResponseModel, VideoShowItemModel } from 'models/show/ShowModel';
import Video from 'components/Video';
import RelateVideos from 'components/RelateVideos';

type Props = {
  data?: VideoShowResponseModel;
  error?: ErrorPageProps;
};

const ShowPage: React.FC = ({ error, data }: Props) => {
  if (error) {
    return null;
  }

  const title = 'YOUTUBE';
  const item: VideoShowItemModel | undefined = data?.items.length ? data.items[0] : undefined;

  return (
    <>
      <Head>{item?.snippet.title || title}</Head>
      <section>
        <div className='flex flex-col lg:flex-row gap-2'>
          {item && <Video item={item} />}
          <RelateVideos channelId={item?.snippet.channelId}></RelateVideos>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const videoId = context?.query?.videoId?.toString();
  const response: AxiosResponse = await getShow(videoId);

  if (response?.data) {
    return {
      props: {
        data: response.data,
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: response.status,
        statusText: response.statusText,
      } as ErrorPageProps,
    },
  };
}

export default ShowPage;
