import React, { useState } from "react";

const Question = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <section>
      <div className={show ? "open" : "closed"}>
        <h4>{props.title}</h4>
        <button onClick={toggleShow}>{show ? "-" : "+"}</button>
      </div>
      {show && <p>{props.info}</p>}
    </section>
  );
};

export default Question;
