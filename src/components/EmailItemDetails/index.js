import React, { useEffect, useRef } from "react";
import { MdOutlineReply } from "react-icons/md";

import "./index.css";

const EmailItemDetails = (props) => {
  const { isInboxArray } = props;
  const data = isInboxArray[0];
  //    console.log(data);
  const { fromEmail, toEmail } = data;
  const buttonRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "R" || event.key === "r") {
      // Trigger button click
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };

  useEffect(() => {
    // Add keydown event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <div className="card">
        <h1>New Product Launch</h1>
        <p>{fromEmail}</p>
        <p>{toEmail}</p>
      </div>
      <button ref={buttonRef} onClick={handleButtonClick} className="reply-btn">
        <MdOutlineReply />
        Reply
      </button>
    </div>
  );
};

export default EmailItemDetails;
