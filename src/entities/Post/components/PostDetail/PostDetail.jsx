import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostIdQuery } from '../../api/fetchPostData';
import { Box, Typography, Button } from '@mui/material';
import { HOME_PATH } from '../../../../shared/consts/paths';

const PostDetail = () => {
  const { id } = useParams();
  const { data } = useGetPostIdQuery(id);

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom align='center'>
        Пост &#8470;{id} с полным описанием
      </Typography>
      {data && (
        <Box border={1} borderColor="grey.400" borderRadius={4} p={2} mt={2}>
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2">{data.body}</Typography>
          <Box mt={2} textAlign="center"> 
            <Link to={HOME_PATH}>
              <Button variant="contained" color="primary">
                Назад
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default PostDetail;


