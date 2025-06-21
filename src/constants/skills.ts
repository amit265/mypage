export const skills = [
    {
      stack: "Frontend",
      type: [
        { lang: "React", strength: 75 },
        { lang: "Tailwind", strength: 80 },
        { lang: "JavaScript", strength: 60 },
      ],
    },
    {
      stack: "Backend",
      type: [
        { lang: "Node.js", strength: 60 },
        { lang: "MongoDB", strength: 75 },
        { lang: "Express", strength: 70 },
      ],
    },
    {
      stack: "Mobile",
      type: [
        { lang: "Android Studio", strength: 60 },
        { lang: "React Native", strength: 50 },
        { lang: "Java", strength: 40 },
      ],
    },
    {
      stack: "Other",
      type: [
        { lang: "Git", strength: 85 },
        { lang: "Docker", strength: 40 },
        { lang: "Firebase", strength: 40 },
      ],
    },
  ];
  

  export type SkillType = {
    lang: string;
    strength: number;
  };
  
  export type Skill = {
    stack: string;
    type: SkillType[];
  };
  