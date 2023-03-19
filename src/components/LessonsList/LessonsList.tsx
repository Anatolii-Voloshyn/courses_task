import React from "react";

import { LessonCard } from "../Lessons/LessonCard";
import { Lesson } from "../types/Courses";

import "./LessonsList.scss";

interface Props {
  lessons: Lesson[];
}

export const AllLessons: React.FC<Props> = ({ lessons }) => (
  <div className="lessons">
    {lessons.map((lesson) => (
      lesson.status === "unlocked" && (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
        />
      )
    ))}
  </div>
)