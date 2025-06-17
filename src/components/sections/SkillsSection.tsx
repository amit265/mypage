import { skills } from "@/constants/skills";
import SkillCard from "../SkillCard";


export default function SkillsSection() {
  return (
    <section className="h-screen flex flex-row">
      <div className="w-1/2">
        <div className="flex gap-8 flex-col items-start mx-24 justify-center h-full">
          <h2 className="text-2xl font-semibold mb-6 text-white">WHAT I CAN DO</h2>
          <h2 className="text-6xl font-semibold mb-6  text-[#BDF347]">Skills & Proficiencies</h2>

          <button className="text-white border border-[#BDF347] rounded-3xl px-16 py-1 top-8 right-16 cursor-pointer text-3xl">⟵</button>
        </div>
      </div>

      <div className="w-1/2">
        <SkillCard skills={skills} />

      </div>
    </section>
  );
}
