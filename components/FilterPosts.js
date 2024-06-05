import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const FilterPosts = () => {
  const [userId, setUserId] = useState('');
  const { data: posts, isLoading, isError } = useQuery(['posts', userId], async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.data;
  }, {
    enabled: !!userId,
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (userId.trim() !== '') {
      setUserId(userId.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <button type="submit">Filter</button>
      </form>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching posts</div>}
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterPosts;
