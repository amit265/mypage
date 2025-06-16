import Image from 'next/image';
import React from 'react'

function NavSection({ onNavigate }: { onNavigate: (section: string) => void }) {
    return (
        <section className="h-screen flex flex-row items-center justify-center text-left p-4 gap-4">

            <div className="w-1/3">
                <Image
                    src="/images/hero.png"
                    width={1000}
                    height={1000}
                    alt="Picture of the author"
                    className="absolute top-0 left-0 w-2/5 h-999/1000"
                />
            </div>
            <div className="w-1/3">
                <ul className="text-[#BDF347] flex flex-col gap-4 text-xl mx-24 items-end">
                    <li className='cursor-pointer hover:text-white' onClick={() => onNavigate('about')}>About</li>
                    <hr className="border-t border-[#BDF347] w-full" />

                    <li className='cursor-pointer hover:text-white' onClick={() => onNavigate('projects')}>Projects</li>
                    <hr className="border-t border-[#BDF347] w-full" />

                    <li className='cursor-pointer hover:text-white' onClick={() => onNavigate('skills')}>Skills</li>
                    <hr className="border-t border-[#BDF347] w-full" />

                    <li className='cursor-pointer hover:text-white' onClick={() => onNavigate('certificates')}>Certificates</li>
                    <hr className="border-t border-[#BDF347] w-full" />

                    <li className='cursor-pointer hover:text-white' onClick={() => onNavigate('contact')}>Contact Me</li>
                    <hr className="border-t border-[#BDF347] w-full" />
                </ul>
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

export default NavSection
