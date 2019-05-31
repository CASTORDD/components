import React from 'react'

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={ props.avatar } alt="avatar"/>
      </a>
      <dir className="content">
        <a href="/" className="author">
          { props.author }
        </a>
        <div className="metadata">
          <span className="date">
            { props.timeAgo}
          </span>
        </div>
        <div className="text">
          { props.message }
        </div>
      </dir>
    </div>
  );
};

export default CommentDetail;