import React, { useState } from 'react';

function CommentList(props) {
  // state: {
  //   query = '';
  // }
  // this.state;
  // this.setState;
  // this.state.query = '';
  const [query, setQuery] = useState('');
  // function updateQuery(newQuery){
  //   setQuery(newQuery.trim());
  // }
  const updateQuery = (newQuery) => setQuery(newQuery.trim());
  const comments = props.comments;

  const showingComments =
    query === ''
      ? comments
      : comments.filter((c) =>
          c.commentValue.toLowerCase().includes(query.toLowerCase())
        );

  const clearQuery = () => setQuery('');

  return (
    <div className='list-comments'>
      <div className='list-comments-top'>
        <input
          className='search-contacts'
          type='text'
          placeholder='Search Comments'
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>
      {showingComments.length !== comments.length && (
        <div className='showing-comments'>
          <span>
            Now showing {showingComments.length} of {comments.length}
          </span>
          <botton type='button' class='btn btn-link' onClick={clearQuery}>
            Show all
          </botton>
        </div>
      )}
      <ol className='contact-list'>
        {showingComments.map((contact) => (
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <p>{contact.commentValue}</p>
            </div>
            <botton
              onClick={() => props.onDeleteComments(contact)}
              className='contact-remove'
            >
              Remove
            </botton>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CommentList;
