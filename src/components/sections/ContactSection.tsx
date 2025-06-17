import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="h-screen flex flex-row items-center justify-center px-16 gap-16 bg-[#1D2549]">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col gap-8 items-start justify-center">
        <button className="text-white border border-[#BDF347] rounded-3xl px-16 py-1 cursor-pointer text-3xl">
          ⟵
        </button>

        <h2 className="text-6xl font-semibold text-[#BDF347]">Let&apos;s Collaborate</h2>

        <h3 className="text-xl font-semibold text-[#BDF347]">Connect with me</h3>

        <div className="flex flex-row gap-4 items-center">
          <CiMail className="text-5xl rounded-full bg-white p-3 cursor-pointer hover:bg-gray-400" />
          <FaLinkedinIn className="text-5xl rounded-full bg-white p-3 cursor-pointer hover:bg-gray-400" />
          <FaGithub className="text-5xl rounded-full bg-white p-3 cursor-pointer hover:bg-gray-400" />
        </div>

        <button className="text-white border border-[#BDF347] rounded-3xl px-8 py-2 cursor-pointer text-base">
          SEND ME A MESSAGE
        </button>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col gap-6 items-start justify-center text-white">
        <h1 className="text-4xl font-bold">AMIT KUMAR</h1>
        <p>Email: <a href="mailto:amit@coderespite.com" className="text-[#BDF347]">amit@coderespite.com</a></p>
        <p>Phone: +91 8292544765</p>
        <p>Website: <a href="https://amit.coderespite.com" target="_blank" className="text-[#BDF347]">amit.coderespite.com</a></p>

        <button className="text-black bg-[#BDF347] rounded-3xl px-8 py-2 cursor-pointer text-base font-semibold">
          Find my resume here
        </button>
      </div>
    </section>
  );
}
