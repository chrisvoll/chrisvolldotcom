import React from 'react';
import { HeaderGroup, Headline, Date } from '../util/style';

export default function NotFoundPage() {
  return (
    <div>
      <HeaderGroup>
        <Headline>Not Found</Headline>
        <Date>You just hit a route that doesn&#39;t exist... the sadness.</Date>
      </HeaderGroup>
    </div>
  );
}
