import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="h-screen overflow-y-auto p-8">
      <h2 className="text-xl font-semibold mb-6 text-left text-white">WHAT I DO</h2>

      <h2 className="text-4xl font-semibold mb-6 text-left text-[#BDF347]">Projects</h2>

      <div className="flex flex-col">
        <div className="flex flex-row p-4">
          <div className="w-1/2 text-white space-y-4 ">
            <h2 className="text-white font-bold text-xl">CodeRespite: Refresh Your Tech Skills </h2>
            <p>
              A self-paced mobile learning app covering HTML, CSS, JavaScript, Node.js, React, and React Native. Features include reading lessons, quiz modules, progress tracking.
            </p>
            <p>Tech Stake: React Native, Firebase, AsyncStorage, JavaScript .</p>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/light.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-1/2 mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-row p-4">

          <div className="w-1/2">
            <Image
              src="/images/light.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="w-1/2 text-white space-y-4 ">
            <h2 className="text-white font-bold text-xl">CodeRespite: Refresh Your Tech Skills </h2>
            <p>
              A self-paced mobile learning app covering HTML, CSS, JavaScript, Node.js, React, and React Native. Features include reading lessons, quiz modules, progress tracking.
            </p>
            <p>Tech Stake: React Native, Firebase, AsyncStorage, JavaScript .</p>
          </div>
        </div>
        <div className="flex flex-row p-4">
          <div className="w-1/2 text-white space-y-4 ">
            <h2 className="text-white font-bold text-xl">CodeRespite: Refresh Your Tech Skills </h2>
            <p>
              A self-paced mobile learning app covering HTML, CSS, JavaScript, Node.js, React, and React Native. Features include reading lessons, quiz modules, progress tracking.
            </p>
            <p>Tech Stake: React Native, Firebase, AsyncStorage, JavaScript .</p>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/light.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-1/2 mx-auto"
            />
          </div>
        </div>
        <div className="flex flex-row p-4">
        <div className="w-1/2">
            <Image
              src="/images/light.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="w-1/2 text-white space-y-4 ">
            <h2 className="text-white font-bold text-xl">CodeRespite: Refresh Your Tech Skills </h2>
            <p>
              A self-paced mobile learning app covering HTML, CSS, JavaScript, Node.js, React, and React Native. Features include reading lessons, quiz modules, progress tracking.
            </p>
            <p>Tech Stake: React Native, Firebase, AsyncStorage, JavaScript .</p>
          </div>
         
        </div>
        <div className="flex flex-row p-4">
          <div className="w-1/2 text-white space-y-4 ">
            <h2 className="text-white font-bold text-xl">CodeRespite: Refresh Your Tech Skills </h2>
            <p>
              A self-paced mobile learning app covering HTML, CSS, JavaScript, Node.js, React, and React Native. Features include reading lessons, quiz modules, progress tracking.
            </p>
            <p>Tech Stake: React Native, Firebase, AsyncStorage, JavaScript .</p>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/light.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="w-1/2 mx-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
