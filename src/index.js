import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45 PM"
          message="Hi ther!"
          avatar={ faker.image.avatar() }  
        />
      </ApprovalCard>
      <CommentDetail 
        author="Alex" 
        timeAgo="Today at 2:00 AM"
        message="Hi Sam"
        avatar={ faker.image.avatar() }  
      />
      <CommentDetail 
        author="Jane" 
        timeAgo="Yesterday at 9:25 PM"
        message="Hi Alex"
        avatar={ faker.image.avatar() }  
      />
      <CommentDetail 
        author="Linz" 
        timeAgo="Yesterday at 15:15 PM"
        message="Hi Jane"
        avatar={ faker.image.avatar() }  
      />     
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);