import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  // RESET
  function clearForm() {
    setFeedback("");
    setRating("");
    setEditId(null);
  }

  // CREATE
  function handleCreate() {
    const newRecord = {
      id: Date.now(),
      feedback: feedback.trim(),
      rating: Number(rating),
    };

    setRecords([...records, newRecord]);
    clearForm();
  }

  // EDIT
  function handleEdit(record) {
    setFeedback(record.feedback);
    setRating(String(record.rating));
    setEditId(record.id);
  }

  // UPDATE
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

  // DELETE
  function handleDelete(id) {
    const remainingRecords = records.filter(
      (record) => record.id !== id
    );

    setRecords(remainingRecords);

    if (editId === id) {
      clearForm();
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        rating,
        records,
        editId,
        setFeedback,
        setRating,
        handleCreate,
        handleEdit,
        handleUpdate,
        handleDelete,
        clearForm,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

