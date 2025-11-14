export default function CourseItem({ title, instructor, timeRemaining, progress }) {
  return (
    <div className="course-item">
      <div className="course-item-main">
        <section>
          <img
            src="/cources-tasks/dashboard-svgrepo-com.svg"
            alt="course icon"
            className="course-icon-large"
          />
        </section>

        <section>
          <h1>{title}</h1>
        </section>

        <section className="course-instructor">
          <img
            src="/cources-tasks/person-2-svgrepo-com.svg"
            alt="instructor"
            className="course-icon-small"
          />
          <p>{instructor}</p>
        </section>
      </div>

      <div className="course-time-info">
        <p>Осталось</p>
        <h1>{timeRemaining}</h1>
      </div>

      <div className="course-progress">
        <span className={`course-progress-circle course-progress-${progress}`}></span>
        <h1>{progress}%</h1>
      </div>
    </div>
  );
}

