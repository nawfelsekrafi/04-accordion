import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <div>
          {data.map((question) => {
            return <SingleQuestion key={question.id} question={question} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
