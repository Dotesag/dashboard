"use client";

import AssignmentItem from "./assignment-item";
import { assignmentsData } from "./assignments-data";
import "@/app/globals.css";
import "./assignments-styles.css";
import "../calendar/calendar-styles.css";
import "../courses-you-are-taking/courses-you-are-taking-styles.css";

export default function AssignmentsPage() {
  const HandleAddAssignment = () => {
    // Handle add assignment action
  };

  return (
    <main className="assignments-container">
      <header className="assignments-header">
        <section className="assignments-header-title">
          <h1>Задания</h1>
        </section>

        <section className="assignments-header-button">
          <button onClick={HandleAddAssignment}>+</button>
        </section>
      </header>

      <section className="assignments-body">
        <div>
          {assignmentsData.map((assignmentData) => (
            <AssignmentItem key={assignmentData.title} {...assignmentData} />
          ))}
        </div>
      </section>
    </main>
  );
}

