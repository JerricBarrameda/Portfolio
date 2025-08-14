import React from "react";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Modern and responsive websites tailored to your brand and goals." },
    { title: "UI/UX Design", desc: "Clean, user-friendly interfaces that offer great user experience." },
    { title: "SEO Optimization", desc: "Improve your search rankings and attract the right audience." },
  ];

  return (
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-10 text-center">
        Services
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow transform hover:scale-105 transition duration-500"
          >
            <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">
              {service.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
