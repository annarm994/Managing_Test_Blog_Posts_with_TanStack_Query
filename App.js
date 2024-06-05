// App.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import UpdatePostForm from './components/UpdatePostForm';
import PatchPostForm from './components/PatchPostForm';
import DeletePostButton from './components/DeletePostButton';
import FilterPosts from './components/FilterPosts';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Create Post</h1>
        <PostForm />
        
        <h1>Posts</h1>
        <Posts />

        <h1>Update Post</h1>
        <UpdatePostForm postId={1} initialTitle="Initial Title" initialBody="Initial Body" />
        
        <h1>Patch Post</h1>
        <PatchPostForm postId={1} initialTitle="Initial Title" />

        <h1>Delete Post</h1>
        <DeletePostButton postId={1} onDelete={() => console.log('Post deleted')} />

        <h1>Filter Posts</h1>
        <FilterPosts />
      </div>
    </QueryClientProvider>
  );
};

export default App;
