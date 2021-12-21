import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    // setText(e.target.value) get value from input
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your servises with us</h2>
        {/*todo rating select */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
