import React from 'react';
import Head from 'next/head';
import { NextPageContext } from 'next';
import Error from 'next/error';
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
    return <Error statusCode={props.error.statusCode} />;
  }

  const title: string = `YOUTUBE`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <ul className='flex flex-row flex-wrap justify-start'>
          {props.data?.items.map((video: VideoModel) => {
            return <VideosCard key={video.id.videoId} item={video} />;
          })}
        </ul>
      </div>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const searchword = context?.query?.searchword?.toString() ?? '';
  const response: any = await getSearch(searchword);

  if (response?.data) {
    return {
      props: {
        data: response.data as [VideoSearchResponseModel],
      },
    };
  }

  return {
    props: {
      error: {
        statusCode: response.status ?? '',
        statusText: response.statusText ?? '',
      } as ErrorPageProps,
    },
  };
}

export default VideosPage;
