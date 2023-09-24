import React from 'react';
import { useGetPostListQuery } from '../api/api';
import PostItem from './PostItem';
import { Box, Typography } from '@mui/material';

function PostsList() {
  const { data } = useGetPostListQuery();

  return (
    <Box p={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Список постов
      </Typography>
      {data?.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </Box>
  );
}

export default PostsList;

