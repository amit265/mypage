import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="h-screen flex flex-row items-center justify-center gap-16 px-16 bg-[#1D2549] relative overflow-hidden">

      {/* Left Side - Images */}
      <div className="w-1/2 flex items-center justify-center relative">
        {/* Background Light Image */}
        <Image
          src="/images/light.png"
          width={800}
          height={800}
          alt="Light background"
          className="absolute w-3/4 opacity-30"
        />
        
        {/* Profile Image */}
        <Image
          src="/images/profile.jpeg"
          width={400}
          height={400}
          alt="Amit Kumar profile"
          className="rounded-full z-10 object-cover border-4 border-[#BDF347]"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-5xl font-semibold text-[#BDF347] mb-6">Hi I&apos;m Amit!</h2>

        <p className="text-2xl text-white text-justify leading-relaxed max-w-xl">
          A passionate web developer with a knack for bringing creative ideas to life. With a background in Computer Science and a diverse skill set, I thrive on tackling exciting projects and collaborating with innovative minds. Let&apos;s connect and explore how we can create something amazing together!
        </p>
      </div>

    </section>
  );
}
