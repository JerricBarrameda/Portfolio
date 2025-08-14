import React, { useState, useEffect } from "react";

export default function Home() {
  const fullText = "Hi, I'm Jerric Barrameda";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect with loop
  useEffect(() => {
    const speed = 100; // typing speed
    const pause = 1500; // pause at the end
    let timer;

    if (!isDeleting && index < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (!isDeleting && index === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && index > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, speed / 2);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText]);

  return (
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center px-6 pt-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{displayedText}</h2>
        <p className="text-lg mb-6">
          A Modern Professional Focused on Excellence and Innovation.
        </p>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-16">
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            About Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate and results-driven professional with experience in
            [your industry/profession]. I help clients and businesses achieve
            their goals through modern, user-friendly, and impactful solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/portrait.jpg" // place your image in public folder
            alt="Your Portrait"
            className="rounded-full shadow-lg w-64 h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl w-full grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Web Development",
            desc: "Modern and responsive websites tailored to your brand and goals.",
          },
          {
            title: "UI/UX Design",
            desc: "Clean, user-friendly interfaces that offer great user experience.",
          },
          {
            title: "SEO Optimization",
            desc: "Improve your search rankings and attract the right audience.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <h4 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
              {card.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
