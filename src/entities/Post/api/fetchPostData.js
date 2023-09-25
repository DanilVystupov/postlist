import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchPostData = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostList: builder.query({
      query: () => 'posts',
    }),
    getPostId: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostListQuery, useGetPostIdQuery } = fetchPostData;
