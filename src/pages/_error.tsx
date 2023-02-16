import Head from 'next/head';

export type ErrorPageProps = {
  statusCode: number;
  statusText: string;
};

const ErrorPage = (props: ErrorPageProps) => {
  const title: string = '에러';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex flex-col gap-5 h-screen justify-center items-center text-3xl'>
        <p>Error [{props.statusCode}]</p>
        <p>{props.statusText}</p>
      </div>
    </>
  );
};

ErrorPage.getInitialProps = (context: any) => {
  return { statusCode: context.res?.statusCode || 404, error: context.err?.toString() ?? '' };
};

export default ErrorPage;
