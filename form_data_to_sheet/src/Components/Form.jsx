import axios from "axios";
import React, { useRef } from "react";

const Form = () => {
  const formRef = useRef(null);
  console.log("Form Ref:", formRef);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(formRef.current);
    const formDataObject = Object.fromEntries(formData);
    console.log("Form data", formDataObject);

    await axios
      .post(
        " https://script.google.com/macros/s/AKfycbxJAwvOnEdgEL0wYC6O3BGNIqzK1YF7pGGCU_jTPRjQwxU04fLGEJOVo0wKL6_Jb59SRg/exec ",
        formDataObject
      )
      .then((res) => {
        const data = res.data;
        console.log("data:", data);
      })
      .catch((err) => {
        console.log("some error occureds", err);
      });
  };

  return (
    <div>
      <h1>Contect Me From</h1>
      <form ref={formRef} onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name" name="Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" id="email" name="Email" />
        <label htmlFor="message">Messages:</label>
        <input type="text" placeholder="Messages" id="message" name="Message" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
