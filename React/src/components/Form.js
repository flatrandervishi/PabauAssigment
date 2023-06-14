import React, { useState } from "react";
import FirstOpt from "./FirstOpt";
import SecondOpt from "./SecondOpt";

function Form() {
  const [page, setPage] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState("");

  const FormTitles = ["Step 1/2", "Step 2/2"];

  const handleNext = (title) => {
    setSelectedTitle(title);
    if (page === FormTitles.length - 1) {
      // Perform any necessary actions or submit the form
    } else {
      setPage((currPage) => currPage + 1);
    }
  };

  const handlePrev = () => {
    setPage((currPage) => currPage - 1);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstOpt handleNext={handleNext} />;
    } else if (page === 1) {
      return <SecondOpt selectedTitle={selectedTitle} />;
    }
  };

  return (
    <div className="mainPage">
      <div className="header">
        <div className="prevButton">
          <button onClick={handlePrev} disabled={page === 0}>
            <span>&#8678;</span> Prev
          </button>
        </div>
        <strong>Choose Service</strong>
        <p>{FormTitles[page]}</p>
      </div>
      <div className="form">
        <div className="form-container">
          <div className="body">{PageDisplay()}</div>
        </div>
        <div className="contact">
          <p>
            Not sure about consultation type? Please, call
            <span> 0203 7959063</span>
          </p>
        </div>
      </div>

      <div className="footer">
        <p>
          Powered by <span>Pabau</span>
        </p>
      </div>
    </div>
  );
}

export default Form;
