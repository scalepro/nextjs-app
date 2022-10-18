import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Heading from '@/components/app/Heading';
import Personal from '@/components/minha-conta/Personal';
import Business from '@/components/minha-conta/Business';

const pageData = {
  title: 'Minha conta',
  pageSubTitle:
    'Tenha todas as informações de sua conta disponíveis em um só lugar e confira se todos os dados informados estão corretos.',
  breadcrumb: [
    {
      title: 'Minha conta',
      href: '/minha-conta',
    },
  ],
};

export default function MinhaConta() {
  return (
    <>
      <Head>
        <title>ScalePRO | Minha conta</title>
      </Head>
      <Layout title={pageData.title}>
        <>
          <Heading page={pageData} />
          <Personal />
          <Business />
        </>
      </Layout>
    </>
  );
}
