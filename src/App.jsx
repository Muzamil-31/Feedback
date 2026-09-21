import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackRecords from "./components/FeedbackRecords";

function App() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  // CREATE - add a new record
  function handleCreate() {
    const newRecord = {
      id: Date.now(),
      feedback: feedback.trim(),
      rating: Number(rating),
    };

    setRecords([...records, newRecord]);
    clearForm();
  }

  // UPDATE - edit an existing record
  function handleEdit(record) {
    setFeedback(record.feedback);
    setRating(String(record.rating));
    setEditId(record.id);
  }

  function handleUpdate() {
    const updatedRecords = records.map((record) => {
      if (record.id === editId) {
        return {
          ...record,
          feedback: feedback.trim(),
          rating: Number(rating),
        };
      }

      return record;
    });

    setRecords(updatedRecords);
    clearForm();
  }

  //Delete a record
  function handleDelete(id) {
    const remainingRecords = records.filter(
      (record) => record.id !== id
    );

    setRecords(remainingRecords);

    if (editId === id) {
      clearForm();
    }
  }

  // Reset
  function clearForm() {
    setFeedback("");
    setRating("");
    setEditId(null);
  }

  return (
    <main className="page-shell">
      <FeedbackForm
        feedback={feedback}
        rating={rating}
        editId={editId}
        onFeedbackChange={setFeedback}
        onRatingChange={setRating}
        onSubmit={editId !== null ? handleUpdate : handleCreate}
      />

      {/* READ - display records */}
      <FeedbackRecords
        records={records}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default App;