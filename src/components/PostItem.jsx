import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { POST_DETAIL_PATH } from '../path/path';

const PostItem = ({post}) => {
  return (
  <Box border={1} borderColor="grey.400" borderRadius={4} p={2} mt={2} >
    <Typography variant="h5" component="div">
      {post.id}.{post.title}
    </Typography>
    <Typography variant="body2">
      {post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}
    </Typography>
    <Box mt={2}>
      <Link to={POST_DETAIL_PATH + `${post.id}`}>
        <Button variant="contained" color="primary">
          Просмотр
        </Button>
      </Link>
    </Box>
  </Box>
  )
}

export default PostItem

