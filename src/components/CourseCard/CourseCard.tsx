import React, { useState } from "react";
import { Course, Meta } from "../types/Courses";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { SvgIcon } from "@mui/material";

import "./CourseCard.scss";


interface Props {
  course: Course;
  meta?: Meta;
}

export const CourseCard: React.FC<Props> = ({ course, meta }) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={`/courses/${course.id}`}>
      <div
        className={isHovered ? 'card hovered' : 'card'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="card-content">
          <div>
            <h2 className="title is-7 p-2">{course.title}</h2>
          </div>

          <div className="image">
            <figure className="card-image">
              <img
                src={`${course.previewImageLink}/cover.webp`}
                alt="Preview"
              />
            </figure>
          </div>

          <div className="content">
            <ul className="is-unstyled">

              {course.containsLockedLessons && (
                <li>
                  <div className="locked">
                    <SvgIcon component={LockIcon} inheritViewBox />
                  </div>
                </li>
              )}

              <li >
                <div className="lessons-count">
                  {`Number of lesson: ${course.lessonsCount}`}
                </div>
              </li>
              {meta?.skills && (
                <li>
                  <ul className="skills">
                    <div className="skills-list">Skills:</div> {meta.skills?.map((skill) => (
                      <li className="skill" key={Math.random()}>{skill}</li>
                    ))}
                  </ul>
                </li>
              )}

              <li>
                <div className="rating">
                  <div className="rating-left">
                    <strong>
                      <em>{`Rating: `}</em> {course.rating} / 5
                    </strong>
                  </div>
                  <div className="rating-right">
                    <progress
                      className="progress is-info"
                      value={course.rating}
                      max="5"
                    >
                      {course.rating}
                    </progress>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}