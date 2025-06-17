'use client';
import { useState } from 'react';

export default function Navbar({ onNavigate }: { onNavigate: (section: string) => void }) {
    const [open, setOpen] = useState(true);
    console.log("opened componenet", open);

    const menuItems = [
        { id: 'title', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <div className="absolute top-4 right-4 z-50">
            {/* <button onClick={() => setOpen(!open)} className="p-2 bg-gray-800 text-white rounded cursor-pointer">
                ☰
            </button> */}
            {open && (
                <div className=" dark:bg-gray-900 rounded absolute right-0 flex ">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => {
                                onNavigate(item.id);
                                // setOpen(false);
                            }}
                            className="block text-left w-full px-2 py-1 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700 rounded cursor-pointer text-white"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
