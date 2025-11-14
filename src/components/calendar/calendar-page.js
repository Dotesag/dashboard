"use client";

import "@/app/globals.css";
import "./calendar-styles.css";
import "../assignments/assignments-styles.css";
import "../courses-you-are-taking/courses-you-are-taking-styles.css";

const WEEKS = [
  ["29", "30", "31", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "29", "30", "31", "1"],
];

const DAYS_OF_WEEK = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

export default function CalendarPage() {
  const HandlePreviousMonth = () => {
    // Handle previous month navigation
  };

  const HandleNextMonth = () => {
    // Handle next month navigation
  };

  return (
    <main className="calendar-container">
      <header className="calendar-header">
        <button
          className="calendar-nav-button"
          onClick={HandlePreviousMonth}
        >
          &lt;
        </button>
        <h1>Август, 2023</h1>
        <button
          className="calendar-nav-button"
          onClick={HandleNextMonth}
        >
          &gt;
        </button>
      </header>

      <div className="calendar-days-header">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day[0]}</div>
        ))}
      </div>

      <div className="calendar-days">
        {WEEKS.map((week, weekIndex) => (
          <div key={weekIndex} className="calendar-week">
            {week.map((day, dayIndex) => {
              const isInactive =
                (weekIndex === 0 && dayIndex < 3) ||
                (weekIndex === 4 && dayIndex > 4);
              const isTarget = parseInt(day) === 17;
              const className = isTarget
                ? "calendar-day-target"
                : isInactive
                ? "calendar-day-inactive"
                : "calendar-day-active";

              return (
                <div key={dayIndex} className={className}>
                  {day}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
