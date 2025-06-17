import Image from "next/image";
import React, { useState } from "react";
import { RiArrowDownDoubleLine, RiArrowUpDoubleLine } from "react-icons/ri";

const CarouselCert = ({ certificates }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === certificates.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? certificates.length - 1 : current - 1);
  };

  console.log(certificates);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen max-w-4xl mx-auto p-4">
      {/* Up Arrow */}
      <button
        onClick={prevSlide}
        className="z-10 mb-4 bg-gray-800 text-[#bdf347] p-2 rounded-full text-5xl border-2 border-[#bdf347]"
      >
        <RiArrowUpDoubleLine />
      </button>

      {/* Certificate */}
      {certificates
        .filter((_, index) => index === current)
        .map((cert, index) => (
          <div key={index} className="w-full">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <div className="flex flex-row items-center justify-between w-full gap-4 mb-4">
                <h3 className="text-lg sm:text-2xl font-semibold text-black">
                  {cert.title}
                </h3>
                <a
                  href={cert.cert_link}
                  target="_blank"
                  className="cursor-pointer font-bold text-lg text-white bg-[#bdf347] hover:bg-[#a5d62e] px-2 py-1 rounded-lg"
                >
                  🔗
                </a>
              </div>
              <Image
                className="w-full max-h-[500px] object-contain border-0 rounded-lg"
                src={`/images/certificates/${cert?.cert_pic}`}
                width={800}
                height={800}
                alt={cert.title}
              />

              <p className="text-sm mt-4 text-gray-700 text-center">
                By: {cert.org}
              </p>
            </div>
          </div>
        ))}

      {/* Down Arrow */}
      <button
        onClick={nextSlide}
        className="z-10 mt-4 bg-gray-800 text-[#bdf347] p-2 rounded-full text-5xl border-2 border-[#bdf347]"
      >
        <RiArrowDownDoubleLine />
      </button>
    </div>
  );
};

export default CarouselCert;
