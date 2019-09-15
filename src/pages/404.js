import React from 'react';
import { HeaderGroup, Headline, Date } from '../util/style';
import Layout from '../layouts/layout';

export default function NotFoundPage() {
  return (
    <Layout>
      <HeaderGroup>
        <Headline>Not Found</Headline>
        <Date>You just hit a route that doesn&#39;t exist... the sadness.</Date>
      </HeaderGroup>
    </Layout>
  );
}
