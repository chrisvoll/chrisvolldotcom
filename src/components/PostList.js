import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

export default function PostList({ posts }) {
  return (
    <div>
      {posts.map((post, i) =>
        <PostItem
          post={post.node || post}
          key={`${i}${post.node ? post.node.id : post.id}`}
          transitionDelay={i * 100}
        />
      )}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array
};
