'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      {/* Navbar / Dark Mode Toggle */}
      <nav className="fixed top-0 left-0 w-full z-10 bg-white dark:bg-gray-900 shadow px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="flex gap-4 items-center">
          {sections.map(sec => (
            <a key={sec.id} href={`#${sec.id}`} className="text-sm hover:underline">
              {sec.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-2 py-1 rounded text-sm"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16">
        <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500 dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-4xl font-bold">Hi, I&apos;m Amit Kumar 👋</h2>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p>I’m a passionate developer who loves building thoughtful digital experiences.</p>
          </div>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="max-w-2xl w-full px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>

            <div className="mb-4">
              <p className="mb-1">Next.js</p>
              <div className="w-full bg-gray-200 rounded h-4 dark:bg-gray-700">
                <div className="bg-blue-500 h-4 rounded" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1">TypeScript</p>
              <div className="w-full bg-gray-200 rounded h-4 dark:bg-gray-700">
                <div className="bg-green-500 h-4 rounded" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-1">Tailwind CSS</p>
              <div className="w-full bg-gray-200 rounded h-4 dark:bg-gray-700">
                <div className="bg-purple-500 h-4 rounded" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <p>Showcase of my best work will go here.</p>
          </div>
        </section>

        <section id="certificates" className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
            <p>Here I&apos;ll display some of the certificates I&apos;ve earned.</p>
          </div>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Contact</h2>
            <p>You can reach me via email or social media.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
