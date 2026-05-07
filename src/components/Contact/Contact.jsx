import React, { useState } from 'react'
import { Alert } from "@material-tailwind/react";

const fieldClasses =
  "mt-1 w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5 text-sm text-[#F5F5F5] placeholder:text-white/40 transition-colors duration-200 focus:border-white/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/20";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "03b8f304-f6a8-45c9-991b-f89196c7c42c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setShowAlert(true);
        setSuccess(true);
        event.target.reset();

        setTimeout(() => {
          setShowAlert(false);
          setTimeout(() => setSuccess(false), 500);
        }, 3000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-xl items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-xl backdrop-blur-sm sm:p-5"
      >
        <h3 className="text-center text-lg font-semibold text-[#F5F5F5] sm:text-xl">
          Contact Form
        </h3>
        <p className="mt-1 text-center text-xs text-white/55 sm:text-sm">
          Replies usually within a day or two.
        </p>

        <div className="mt-4">
          <label
            htmlFor="name"
            className="text-sm font-medium text-white/80"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className={fieldClasses}
          />
        </div>

        <div className="mt-3.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-white/80"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className={fieldClasses}
          />
        </div>

        <div className="mt-3.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-white/80"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            rows={5}
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-4.5 inline-flex h-10 w-full items-center justify-center rounded-lg border border-white/15 bg-white text-sm font-semibold text-black shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:cursor-not-allowed disabled:opacity-70 sm:h-11"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <div
            className={`mt-4 transition-opacity duration-500 ${
              showAlert ? "opacity-100" : "opacity-0"
            }`}
          >
            <Alert className="w-full rounded-lg border-l-4 border-[#2ec946] bg-[#2ec946]/10 text-sm font-medium text-[#2ec946]">
              Message sent successfully
            </Alert>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
