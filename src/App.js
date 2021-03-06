import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// import Card from "./components/shared/Card";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconeLink from "./components/AboutIconeLink";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // console.log(newFeedback)
  // setFeedback([newFeedback, ...feedback]);
  // }

  const deleteFeedback = (id) => {
    if (window.confirm("are you sure want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Route exact path="/">
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        </Route>
        <Route path="/about" component={AboutPage} />
        <AboutIconeLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}
export default App;
