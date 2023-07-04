"use client";
import { useRef } from "react";
// for receiving emails
import emailjs from "@emailjs/browser";
// notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxv5jyr",
        "portfolio_contact_form",
        form.current,
        "fIY6KUi5OrJeRrRIN"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent succesfully')
        },
        (error) => {
          console.log(error.text);
          toast.error(`Couldn't send message due to ${error}`)
        }
      );
  };

  return (
    <section className=" pt-28 flex flex-col justify-center h-screen max-w-screen-md mx-auto px-8 md:px-10 xl:max-w-screen-lg xl:px-[160px]">
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-y-10">
        <h1 className=" text-center text-2xl md:text-4xl">
          Send me an email &#128512;
        </h1>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className=" rounded-sm"
        />
        {/* <label>Email</label> */}
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          className=" rounded-sm"
        />
        {/* <label>Message</label> */}
        <textarea
          name="message"
          placeholder="Your message"
          className=" rounded-sm"
        />
        <input
          type="submit"
          value="Send"
          className=" bg-emerald-500 p-2 rounded uppercase cursor-pointer text-white font-semibold hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-600/50"
        />
      </form>
    </section>
  );
}
