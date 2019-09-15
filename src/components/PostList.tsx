import React from 'react';
import { IPost } from '../types';
import PostItem from './PostItem';

interface IProps {
  posts: IPost[];
}

const PostList: React.FC<IProps> = ({ posts }) => (
  <div>
    {posts.map((post, i) => (
      <PostItem
        post={post.node || post}
        key={`${i}${post.node ? post.node.id : post.id}`}
        transitionDelay={i * 100}
      />
    ))}
  </div>
);

export default PostList;
