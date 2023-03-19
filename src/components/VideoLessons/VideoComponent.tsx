import React from 'react';
import ReactPlayer from 'react-player';
import { Typography } from '@mui/material';
import { Lesson } from '../types/Courses';

type Props = {
  video: Lesson;
};

const VideoComponent: React.FC<Props> = ({ video }) => {
  return (
    <>
      <ReactPlayer
        width="1220px"
        height="690px"
        className="react-player"
        url={video.link}
        controls
      />

      <Typography variant="h5" fontWeight="bold" p={2}>
        {video.title}
      </Typography>
    </>

  )
}

export default VideoComponent