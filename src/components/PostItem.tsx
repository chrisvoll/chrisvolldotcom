import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { IPost } from '../types';
import { h2, h3, link } from '../util/style';
import WithFadeTransition from './WithFadeTransition';

interface IProps {
  transitionDelay?: number;
  post: IPost;
}

const PostItem: React.FC<IProps> = ({ post, transitionDelay }) => (
  <WithFadeTransition delay={transitionDelay}>
    <Headline>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </Headline>
    <Date>{post.frontmatter.date}</Date>
    <Excerpt>{post.excerpt}</Excerpt>
  </WithFadeTransition>
);

export default PostItem;

const Headline = styled.h2`
  font-family: ${h2.fontFamily};
  font-size: ${h2.fontSize};
  line-height: 140%;
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

const Excerpt = styled.p`
  margin-bottom: 50px;
  color: #555;
`;
