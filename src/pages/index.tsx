import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import { AxiosResponse } from 'axios';
import { ErrorPageProps } from './_error';
import { VideoModel, VideoSearchResponseModel } from 'models/videos/VideoModel';
import VideosCard from 'components/common/card/VideosCard';
import { getSearch } from 'api/videos/videos';

type Props = {
  data?: VideoSearchResponseModel;
  error?: ErrorPageProps;
};

const VideosPage: React.FC = (props: Props) => {
  if (props.error) {
    return null;
  }

  const title: string = `YOUTUBE`;
  return (
    <>
      <Head>{title}</Head>
      <section>
        <ul className='flex flex-row flex-wrap justify-start'>
          {props.data?.items.map((video: VideoModel) => {
            return <VideosCard key={video.id.videoId} item={video} />;
          })}
        </ul>
      </section>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const searchword = context?.query?.searchword?.toString() ?? 'bts';
  const response: AxiosResponse = await getSearch(searchword);

  if (response.data) {
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

export default VideosPage;
