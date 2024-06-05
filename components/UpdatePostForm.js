import React, { useState } from 'react';
import axios from 'axios';

const UpdatePostForm = ({ postId, initialTitle, initialBody }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, { title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdatePostForm;
