import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Box, Stack } from '@mui/material';

import { Lesson } from '../types/Courses';

import './VideoDetail.scss'
import { LessonCard } from '../Lessons/LessonCard';
import VideoComponent from './VideoComponent';

type Props = {
  lessons: Lesson[];
}

const VideoDetail: React.FC<Props> = ({ lessons }) => {
  const [video, setVideo] = useState(lessons[0]);

  return (

      <Box minHeight="95vh" className="video-detail">
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
              <VideoComponent video={video}/>
            </Box>
          </Box>

          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <div className="playlist m-10">
              {lessons.map(lesson => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                />
              ))}
            </div>
          </Box>
        </Stack>
      </Box>
  )
}

export default VideoDetail;