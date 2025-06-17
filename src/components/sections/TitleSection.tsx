'use client';

import Image from "next/image";

export default function TitleSection({ onNavigate }: { onNavigate: (section: string) => void }) {
    return (
        <section className="h-screen flex flex-row items-center justify-center text-left p-4 gap-4">

            <button className="text-white border border-[#BDF347] rounded-3xl px-16 py-2 absolute top-24 right-8 cursor-pointer">PORTFOLIO</button>
            <div className="w-1/3">
                <Image
                    src="/images/hero.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="absolute top-0 left-0 w-2/5 h-999/1000"
                />
            </div>
            <div className="w-2/3">
                <h1 className="text-9xl font-bold dark:text-white text-[#BDF347]">Amit Kumar</h1>
                <p className="text-xl mt-4 text-white dark:text-gray-300">
                    Full Stack Developer | MERN | Android | React Native
                </p>
                <button className="text-white mt-16 border border-[#BDF347] rounded-3xl px-16 py-2 cursor-pointer" onClick={() => onNavigate('nav')}
                >WORK WITH ME ⟶</button>
            </div>
            <Image
                src="/images/light.png"
                width={500}
                height={500}
                alt="Picture of the author"
                className="absolute -bottom-64 -right-64 "
            />
        </section>
    );
}
