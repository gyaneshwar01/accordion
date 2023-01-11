import React from "react";
import Question from "./Question";
import { questions } from "./questions";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
