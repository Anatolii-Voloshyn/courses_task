import React, { useState, useCallback } from "react";
import { Lesson } from "../types/Courses";

import "./LessonCard.scss";

interface Props {
  lesson: Lesson;
}

export const LessonCard: React.FC<Props> = ({ lesson }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <div
        className={isHovered ? 'lesson-card hovered' : 'lesson-card'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <h2 className="lesson-title is-5 p-2">{lesson.title}</h2>
        </div>

        <div className="card-image">
          <figure className="image">
            <img
              src={`${lesson.previewImageLink}/lesson-1.webp}`}
              alt="Preview lesson"
            />
          </figure>
        </div>
      </div>
  );
}