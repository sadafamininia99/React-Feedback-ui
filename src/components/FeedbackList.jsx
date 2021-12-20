import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.lenghth === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={(id) => deleteFeedback(id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
