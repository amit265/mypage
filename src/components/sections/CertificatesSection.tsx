const certificates = [
    { title: 'Full Stack Web Development', issuer: 'AltCampus' },
    { title: 'React Native Mastery', issuer: 'Udemy' },
    { title: 'Data Structures & Algorithms', issuer: 'Coding Ninjas' },
  ];
  
  export default function CertificatesSection() {
    return (
      <section className="h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-semibold mb-6 dark:text-white">Certificates</h2>
        <div className="w-full max-w-2xl space-y-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg"
            >
              <h3 className="text-xl font-bold dark:text-white">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  