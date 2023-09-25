import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { fetchPostData } from '../../entities/Post/api/fetchPostData'


export const store = configureStore({ 
  reducer: {
    [fetchPostData.reducerPath]: fetchPostData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchPostData.middleware),
})

setupListeners(store.dispatch)