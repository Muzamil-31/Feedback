import { useState } from "react";

function FeedbackForm({
  feedback,
  rating,
  editId,
  onFeedbackChange,
  onRatingChange,
  onSubmit,
}) {
  // Error state
  const [error, setError] = useState("");

function handleSubmit(event) {
  event.preventDefault();

    if (!feedback.trim()) {
      setError("Please enter your feedback.");
      return;
    }

    if (!rating) {
      setError("Please select a rating from 1 to 10.");
      return;
    }
// Calling the parent's submit function
    setError("");
    onSubmit();
  }

  return (
    <section className="card form-card" aria-labelledby="feedback-form-title">
      <div className="card-heading">
        <h2 id="feedback-form-title">Feedback</h2>
      </div>
{/* submit event */}
      <form onSubmit={handleSubmit}>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => onFeedbackChange(event.target.value)}
          placeholder="Enter your feedback..."
          rows="3"
        />

        <div className="form-controls">
          <div>
            <p className="rating-label">Rating</p>
            <div className="rating-options">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <label className="rating-option" key={value}>
                  <input
                    type="radio"
                    name="rating"
                    value={value}
                    // Checking which rating is selected
                    checked={rating === String(value)}
                    onChange={(event) => onRatingChange(event.target.value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </div>
{/* Update or Submit button */}
          <button className="primary-button" type="submit">
            {editId !== null ? "Update" : "Submit"}
          </button>
        </div>
{/* Showing the error */}
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

export default FeedbackForm;
