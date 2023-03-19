import React, { useState } from 'react';
import coursesFromServer from '../../api/preview_courses.json'
import { AllCourses } from './CoursesList';

export const CoursesWithPagination: React.FC = () => {
  const [courses, setCourses] = useState(coursesFromServer.courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);

  const coursesPage = () => {
    setCurrentPage(1);
  }
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Logic for displaying courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <>
      <AllCourses courses={currentCourses} />
      <div className="pagination mt-2 is-justify-content-center">
        {currentPage !== 1 && (
          <button className='button button-prev is-info mr-5' onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        )}
        {courses.length > coursesPerPage && (
          <ul>
            {Array.from({ length: Math.ceil(courses.length / coursesPerPage) }, (v, i) => (
              <button className='button button-num is-info is-rounded mr-2 ml-2' key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
            ))}
          </ul>
        )}
        {currentPage !== Math.ceil(courses.length / coursesPerPage) && (
          <button className='button button-next is-info ml-5' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </>


  );
}