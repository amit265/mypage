import React from 'react';
import { Skill } from '@/constants/skills';

type SkillCardProps = {
  skills: Skill[];
};

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap justify-evenly items-center py-4 w-full h-full'>
      {skills.map((skill) => (
        <div key={skill.stack} className='p-2 w-10/12 lg:w-1/3 m-2 rounded-lg '>
          <h1 className='text-xl sm:text-2xl font-bold mb-4 text-[#BDF347] '>
            {skill.stack}
          </h1>
          <div>
            {skill.type.map((type) => (
              <div key={type.lang} className='mb-4'>
                <h2 className='text-base sm:text-lg font-semibold text-white'>{type.lang}</h2>
                <div className='w-full mt-4 bg-gray-300 rounded-full h-4 relative overflow-hidden'>
                  <div
                    className={`h-4 rounded-full bg-[#BDF347]`}
                    style={{
                      width: `${type.strength}%`,
                    }}
                  ></div>
                </div>
                <span className='text-sm'>{type.strength}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
