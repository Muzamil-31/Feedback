import { useContext, useState } from "react";
import { FeedbackContext } from "../context/FeedBackContext";

function FeedbackForm() {
  const {
    feedback,
    rating,
    editId,
    setFeedback,
    setRating,
    handleCreate,
    handleUpdate,
  } = useContext(FeedbackContext);

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

    // Calling the correct function
    setError("");

    if (editId !== null) {
      handleUpdate();
    } else {
      handleCreate();
    }
  }

  return (
    <section
      className="card form-card"
      aria-labelledby="feedback-form-title"
    >
      <div className="card-heading">
        <h2 id="feedback-form-title">Feedback</h2>
      </div>

      {/* submit event */}
      <form onSubmit={handleSubmit}>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
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
                    onChange={(event) =>
                      setRating(event.target.value)
                    }
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