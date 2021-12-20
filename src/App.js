import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats"
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("are you sure want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="contsiner">
        <FeedbackStats  feedback={feedback}/>
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        <Card />
      </div>
    </>
  );
}
export default App;
