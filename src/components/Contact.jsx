import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'your-email@domain.com' with your actual email address
    const mailtoLink = `mailto:tomarvidhi02@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#272833] py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#B64D4E] to-[#B64D4E] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div className="text-[#FFFFFF] relative px-4 py-10 bg-[#B64D4E] shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-[#FFFFFF]">
              Fill up the form below to send us a message.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ height: "121px" }}
            ></textarea>
            <div className="flex justify-between">
              <input
                className="shadow bg-[#B64D4E] hover:bg-[#B64D4E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-[#B64D4E] hover:bg-[#B64D4E] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
