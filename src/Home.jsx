import React, { useState, useEffect } from "react";

export default function Home() {
  const fullText = "Hi, I'm Jerric Barrameda";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation with loop
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
    <div className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center mb-16 pt-24">
        <h2 className="text-4xl font-bold mb-4">{displayedText}<span className="blinking-cursor">|</span></h2>
        <p className="text-lg mb-6">A Modern Professional Focused on Excellence and Innovation.</p>
      </section>

      {/* About Me Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-12">
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate and results-driven professional with experience in web development and design. I help clients achieve their goals with modern, user-friendly, and impactful solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/portrait.jpg" // put your portrait.jpg in public folder
            alt="Portrait"
            className="rounded-full shadow-lg w-64 h-64 object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Card One", "Card Two", "Card Three"].map((title, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition duration-500 hover:scale-105"
          >
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-700 dark:text-gray-300">Description for {title.toLowerCase()} goes here.</p>
          </div>
        ))}
      </section>

      {/* Ko-fi Widget */}
      <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          kofiWidgetOverlay.draw('jerricbarrameda', {
            type: 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#323842',
            'floating-chat.donateButton.text-color': '#fff'
          });
        `,
        }}
      ></script>

      {/* Blinking cursor style */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: #000;
          animation: blink 0.7s infinite;
        }
        .dark .blinking-cursor {
          color: #fff;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
