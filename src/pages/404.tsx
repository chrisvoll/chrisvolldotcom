import React from 'react';
import Layout from '../layouts/layout';
import { Date, HeaderGroup, Headline } from '../util/style';

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
