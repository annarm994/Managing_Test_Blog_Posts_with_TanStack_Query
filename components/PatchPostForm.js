import React, { useState } from 'react';
import axios from 'axios';

const PatchPostForm = ({ postId, initialTitle }) => {
  const [title, setTitle] = useState(initialTitle);

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Patch</button>
    </form>
  );
};

export default PatchPostForm;
