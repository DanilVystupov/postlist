import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PostsList from './components/PostList';
import PostDetail from './components/PostDetail';
import { HOME_PATH, POST_DETAIL_PATH } from './path/path';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PATH} element={<PostsList/>} />
        <Route path={POST_DETAIL_PATH + ':id'} element={<PostDetail/>} />
        <Route path="/*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;