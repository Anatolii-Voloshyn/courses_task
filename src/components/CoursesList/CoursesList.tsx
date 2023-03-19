import React from "react";

import { CourseCard } from "../CourseCard/CourseCard";
import { Course } from "../types/Courses";

import "./CoursesList.scss";

interface Props {
  courses: Course[];
}

export const AllCourses: React.FC<Props> = ({ courses }) => {
  const reversedCourses = courses.reverse();

  return (
  <>
    <div className="courses">
      {reversedCourses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
          meta={course.meta}
        />
      ))}
    </div>
  </>
  );
}