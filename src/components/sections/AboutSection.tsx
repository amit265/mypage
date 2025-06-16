import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="h-screen flex flex-row items-center justify-center text-center p-8">
      <button className="text-white border border-[#BDF347] rounded-3xl px-16 py-1 absolute top-8 right-16 cursor-pointer text-3xl">⟵</button>

      <div className="w-1/2">
        <Image
          src="/images/light.png"
          width={1000}
          height={1000}
          alt="Picture of the author"
          className="absolute top-0 left-0 w-2/5 h-999/1000"
        />

      </div>
      <div className="w-1/2 flex flex-col justify-center items-start">          
        <h2 className="text-5xl font-semibold dark:text-white text-[#BDF347]">Hi I&apos;m Amit!</h2>
        <p className="mt-4 max-w-2xl text-2xl text-white dark:text-gray-300 text-justify">
          a passionate web developer with a knack for bringing creative ideas to life. With a background in Computer Science and a diverse skill set, I thrive on tackling exciting projects and collaborating with innovative minds. Let&apos;s connect and explore how we can create something amazing together! </p>
      </div>

    </section>
  );
}
