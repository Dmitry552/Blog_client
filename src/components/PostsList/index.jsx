import React from 'react';
import PostItem from '../Postitem';
import './PostsList.scss';

function PostsList({items}) {
  return(
    <div className="post-items">
      {items ? items.map(post => (
        <PostItem {...post}/>
      )) : 'Loading...'}
    </div>
  );
};

export default PostsList;