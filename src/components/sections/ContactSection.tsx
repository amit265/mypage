export default function ContactSection() {
    return (
      <section className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-semibold mb-4 dark:text-white">Contact Me</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Let’s connect and build something together.
        </p>
        <a
          href="mailto:amit@example.com"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </section>
    );
  }
  