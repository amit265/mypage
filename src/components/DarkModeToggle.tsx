'use client';

export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 left-4 p-2 bg-gray-800 text-white rounded"
    >
      🌓
    </button>
  );
}
