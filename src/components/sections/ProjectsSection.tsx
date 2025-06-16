import Image from "next/image";
import { projects } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <section className="h-screen overflow-y-auto">
      <div className="p-8" >
        <h2 className="text-xl font-semibold mb-6 text-left text-white">WHAT I DO</h2>
        <h2 className="text-4xl font-semibold mb-6 text-left text-[#BDF347]">Projects</h2>
      </div>

      <div className="flex flex-col mt-8">
        {projects.map((project, index) => (
          <div key={project?.id} className="flex h-[60vh] p-8 gap-8">
            {/* Alternate Layout */}
            {index % 2 !== 0 ? (
              <div className="flex flex-row gap-8 items-end justify-center">

                <div className="w-1/2 -ml-12">
                  <Image
                    src="/images/light.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="-ml-86"
                  />
                  <Image
                    src={`/images/projects/${project?.image}.png`}
                    width={800}
                    height={800}
                    alt={project?.title}
                    className="w-full h-[50vh] rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="md:w-1/2 w-full text-white space-y-4 p-12">
                  <h3 className="text-2xl font-bold">{project?.title}</h3>
                  <p className="text-sm text-[#BDF347]">{project?.techStack}</p>
                  <p className="text-base leading-relaxed ">{project?.description}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-8 items-end justify-center p-12">
                <div className="md:w-1/2 w-full text-white space-y-4">
                  <h3 className="text-2xl font-bold">{project?.title}</h3>
                  <p className="text-sm text-[#BDF347]">{project?.techStack}</p>
                  <p className="text-base leading-relaxed text-justify">{project?.description}</p>
                </div>
                <div className="w-1/2 -mr-32">
                  <Image
                    src={`/images/projects/${project?.image}.png`}
                    width={800}
                    height={800}
                    alt={project?.title}
                    className="w-full h-[50vh] rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

  );
}
