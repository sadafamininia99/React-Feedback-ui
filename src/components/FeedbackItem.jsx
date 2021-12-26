import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import { useRef, useEffect } from "react";

function FeedbackItem({ item, handleDelete }) {
  const textref = useRef();
  useEffect(() => {
    if (textref.current) {
      // textref.current.innerHTML = "sadadf";
      // console.log("object");
    }
    return () => {
      //component unmount
    };
  }, []);
  //didmount
  // useEffect(() => {console.log('dwwwwwwwwwwwww')}, [item.text]);

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">
        {item.text}
      </div>
    </Card>
  );
}

export default FeedbackItem;
