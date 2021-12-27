import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.lenghth === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={(id) => deleteFeedback(id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
// ;

// return (
// <div className="feedback-list">
/* {feedback.map((item) => ( */
// <FeedbackItem
// key={item.id}
// item={item}
// handleDelete={(id) => deleteFeedback(id)}
// />
// ))}
/* </div>  */
// );
// }

export default FeedbackList;
