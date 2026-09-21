function FeedbackRecords({ records, onEdit, onDelete }) {
  return (
    <section className="card records-card" aria-labelledby="records-title">
      <div className="card-heading">
        <div>
          <h2 id="records-title">Feedback Records</h2>
        </div>
      </div>
{/* Check if records exist */}
      {records.length === 0 ? (
        <div className="empty-state">
          <p>No feedback yet.</p>
        </div>
      ) : (
        <div className="records-list">
          {records.map((record) => (
            <article className="record" key={record.id}>
              <div
                className="record-content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <p className="record-text">
                  {/* Display feedback */}
                  <strong>Feedback:</strong> {record.feedback}
                </p>
                <p className="record-rating">
                  {/* Display rating */}
                  <strong>Rating:</strong> {record.rating}/10
                </p>
              </div>
              <div className="record-actions">
                <button
                  className="text-button edit-button"
                  type="button"
                  // Edit button
                  onClick={() => onEdit(record)}
                >
                  Edit
                </button>
                <button
                  className="text-button delete-button"
                  type="button"
                  // Delete button
                  onClick={() => onDelete(record.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FeedbackRecords;
