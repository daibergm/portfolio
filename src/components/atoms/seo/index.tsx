import Head from 'next/head';
import { SeoProps } from './types';

const Seo = ({ pageTitle }: SeoProps) => (
  <>
    <Head>
      <title>{`${pageTitle} || Daiber Gonzalez Personal Portfolio}`}</title>
    </Head>
  </>
);

export default Seo;
