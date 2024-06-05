import React from 'react';
import axios from 'axios';

const DeletePostButton = ({ postId, onDelete }) => {
  const handleDelete = async () => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    onDelete(postId);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeletePostButton;
