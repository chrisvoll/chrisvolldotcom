import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { h2, h3, link } from '../util/style';
import WithFadeTransition from './WithFadeTransition';

const Headline = styled.h2`
  font-family: ${h2.fontFamily};
  font-size: ${h2.fontSize};
  text-align: center;

  a {
    ${link};
  }
`;

const Date = styled.h3`
  font-family: ${h3.fontFamily};
  font-size: ${h3.fontSize};
  text-align: center;
`;

const Excerpt = styled.p``;

export default function PostItem({ post, transitionDelay }) {
  return (
    <WithFadeTransition delay={transitionDelay}>
      <div>
        <Headline>
          <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
          </Link>
        </Headline>
        <Date>
          {post.frontmatter.date}
        </Date>
        <Excerpt>
          {post.excerpt}
        </Excerpt>
      </div>
    </WithFadeTransition>
  );
}

PostItem.propTypes = {
  post: PropTypes.object,
  transitionDelay: PropTypes.number
};
