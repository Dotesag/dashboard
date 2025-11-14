export default function AssignmentItem({ title, date, status, color }) {
  return (
    <div className="assignment-item">
      <section className="assignment-item-content">
        <img
          src="/cources-tasks/assignment.svg"
          alt="assignment"
          className="assignment-icon"
        />
        <section>
          <h1>{title}</h1>
          <p>{date}</p>
        </section>
      </section>

      <button
        className="assignment-status-button"
        style={{ backgroundColor: color }}
      >
        {status}
      </button>
    </div>
  );
}

