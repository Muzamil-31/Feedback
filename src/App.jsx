import FeedbackForm from "./components/FeedbackForm";
import FeedbackRecords from "./components/FeedbackRecords";
import { FeedbackProvider } from "./context/FeedBackContext";

function App() {
  return (
    <FeedbackProvider>
      <main className="page-shell">
        <FeedbackForm />
        <FeedbackRecords />
      </main>
    </FeedbackProvider>
  );
}

export default App;