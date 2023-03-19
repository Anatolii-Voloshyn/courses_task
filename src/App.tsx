import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import lessonsFromServer from './api/preview_course.json';
import VideoDetail from './components/VideoLessons/VideoDetail';
import { CoursesWithPagination } from './components/CoursesList/CoursesWithPagination';

import HomeIcon from '@mui/icons-material/Home';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const App = () => {

  const [lessons] = useState(lessonsFromServer.lessons);

  return (
    <BrowserRouter>
      <div className="page">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Link to="/"><HomeIcon sx={{ color: grey[50] }} /></Link>
            </IconButton>
            <Typography variant="h6" sx={{ color: grey[50] }}>
              Courses
            </Typography>
          </Toolbar>
        </AppBar>


        <div className='page-content m-4'>
          <div className='all-courses'>
            <Routes>
              <Route path="/" element={<CoursesWithPagination />} />
              <Route path="/courses/:id" element={<VideoDetail lessons={lessons} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
