"use client";
import { create } from "@/actions/create";
import Form from "next/form";
import { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  console.log("contact");
  return (
    <Form className="relative z-30" action={create}>
      <div className="my-3">
        <input
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="my-3">
        <input
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="my-3">
        <textarea
          className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-white/80 hover:bg-white/94"
          id="message"
          name="message"
          rows={6}
          placeholder="Message"
          required
        />
      </div>
      <button
        className="w-full py-3 px-4 rounded-2xl focus:outline-none bg-primary hover:bg-gold text-secondary font-semibold"
        type="submit"
      >
        {/* {loading ? "Sending..." : "Submit"} */}
        submit
      </button>
    </Form>
  );
};

export default ContactForm;
