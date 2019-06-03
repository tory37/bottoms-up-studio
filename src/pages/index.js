import React from 'react';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>Welcome to BottomsUpStudio.com</p>
    <p>Work is in progress, but this will be the futue site of a bunch of random things.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
