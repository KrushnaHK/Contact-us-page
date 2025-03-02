import Button from "../Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import  './index.css'
const ContactForm = () => {
  const [name, setName] = useState("Krushna");
  const [email, setEmail] = useState("krushnahandibag02@gmail.com");
  const [text, setText] = useState("नमस्कार मंडळी कसे आहात सगळे बरे असालच");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className="container">
      <div className="contact_form">
        <div className="top_btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className="form_control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form_control">
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div className="message--container">
            <p >{name}</p>
            <p >{email}</p>
            <p className="msg">{text}</p>
          </div>
        </form>
      </div>
      <div className="contact_image">
        <img src="/images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};

export default ContactForm;