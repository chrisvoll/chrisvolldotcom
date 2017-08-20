import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { CSSTransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { h2, h3, link, fadeIn } from '../util/style';

const PostBody = styled.div`
  transition-delay: ${props => props.transitionDelay || 0}ms;
  ${fadeIn};
`;

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
  const timeout = 500 + transitionDelay;
  return (
    <CSSTransitionGroup
      transitionName="post-transition"
      transitionAppear
      transitionAppearTimeout={timeout}
      transitionEnter={false}
      transitionLeave={false}
    >
      <PostBody transitionDelay={transitionDelay}>
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
      </PostBody>
    </CSSTransitionGroup>
  );
}

PostItem.propTypes = {
  post: PropTypes.object,
  transitionDelay: PropTypes.number
};
