import React from "react";

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-10 text-center">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 transition duration-500"
          >
            <h4 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
              Project Title
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Brief description of the project and the tools/technologies used.
            </p>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
