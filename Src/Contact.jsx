import React from "react";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6 text-center">
        Contact Me
      </h3>
      <form
        action="https://formspree.io/f/your_form_id"
        method="POST"
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4 max-w-4xl mx-auto transform hover:scale-105 transition duration-500"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded h-32 bg-gray-50 dark:bg-gray-700"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
