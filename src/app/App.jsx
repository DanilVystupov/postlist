import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HOME_PATH, POST_DETAIL_PATH } from '../shared/consts/paths';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PATH} element={<HomePage/>} />
        <Route path={POST_DETAIL_PATH + ':id'} element={<PostDetailPage/>} />
        <Route path="/*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;