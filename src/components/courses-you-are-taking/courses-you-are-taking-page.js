"use client";

import { coursesData1, coursesData2 } from "./courses-you-are-taking-data";
import CourseItem from "./course-item";
import "../assignments/assignments-styles.css";
import "../calendar/calendar-styles.css";
import "./courses-you-are-taking-styles.css";

export default function CoursesYouAreTakingPage() {
  const allCourses = [...coursesData1, ...coursesData2];

  const HandleAddCourse = () => {
    // Handle add course action
  };

  return (
    <main className="courses-container">
      <header className="courses-header">
        <section className="courses-header-title">
          <h1>Курсы, которые вы проходите</h1>
        </section>

        <section className="courses-header-actions">
          <section className="courses-header-select">
            <select>
              <option>Активные</option>
            </select>
          </section>

          <section className="courses-header-button">
            <button onClick={HandleAddCourse}>+</button>
          </section>
        </section>
      </header>

      <section>
        {allCourses.map((courseData) => (
          <CourseItem key={courseData.title} {...courseData} />
        ))}
      </section>
    </main>
  );
}

