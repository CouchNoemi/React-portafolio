import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [message, setMessage] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const handleFocusOut = (field) => {
    if (field === "name") {
      setNameErr("");
      if (name.length <= 0) setNameErr("Enter a name");
    }
    if (field === "email") {
      //setEmailErr("");
      if (email.length <= 0) setEmailErr("Enter email address");
    }
    if (field === "message") {
      setMessageErr("");
      if (message.length <= 0) setMessageErr("Enter a message");
    }
  };

  const handleEmailChange = (val) => {
    setEmail(val);
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (pattern.test(val)) {
      setEmailErr("");
    } else {
      setEmailErr("Wrong email");
    }
  };

  return (
    <div className="myCon">
      <div className="contact">
        <div>
          <p>My Email: noemicouch@gmail.com</p>
          <p>My Tel: 63948737394</p>
        </div>
        <div className="mb-3">
          <label for="nameInput" className="form-label">
            Name
          </label>
          <input
            onBlur={() => handleFocusOut("name")}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Noemi Couch"
          />
          <p className="errorMsg">{nameErr}</p>
        </div>
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email address
          </label>
          <input
            onBlur={() => handleFocusOut("email")}
            onChange={(e) => handleEmailChange(e.target.value)}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
          <p className="errorMsg">{emailErr}</p>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            onBlur={() => handleFocusOut("message")}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <p className="errorMsg">{messageErr}</p>
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
