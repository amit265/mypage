const skills = [
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'React Native', level: 80 },
    { name: 'MongoDB', level: 70 },
  ];
  
  export default function SkillsSection() {
    return (
      <section className="h-screen flex flex-col justify-center items-center p-6">
        <h2 className="text-4xl font-semibold mb-6 dark:text-white">Skills</h2>
        <div className="w-full max-w-xl space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full">
                <div
                  className="h-3 bg-blue-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  