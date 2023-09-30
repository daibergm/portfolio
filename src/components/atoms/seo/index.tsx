import Head from 'next/head';
import { SeoProps } from './types';

function Seo({ pageTitle }: SeoProps) {
  return (
    <Head>
      <title>{`${pageTitle} || Daiber Gonzalez Personal Portfolio}`}</title>
    </Head>
  );
}

export default Seo;
