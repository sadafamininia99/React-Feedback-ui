import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback }) {
  if (!feedback || feedback.lenghth === 0) {
    return <p>no feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item,handleDelete) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={(id) => console.log(id)}
        />
      ))} 
    </div>
  );
}

export default FeedbackList;
