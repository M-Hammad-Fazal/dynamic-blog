"use client"
import React, {useState, useEffect} from "react"
import Link from "next/link"

export default function Navbar(){

    const [currentDateTime, setCurrentDateTime] = useState(``);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }
            setCurrentDateTime(now.toLocaleDateString('en-US', options))
        }

        updateDateTime();
        const interValid = setInterval(updateDateTime, 1000)
        return () => clearInterval(interValid)
    },[])

    return(
        <header className="text-gray-400 body-font shadow-lg">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <div className="flex-1 text-black">
                    <span className="font-bold">{currentDateTime}</span>
                </div>

                <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                    <Link href="/" className="mr-5 hover:text-white hover:bg-[#252B42] p-2 rounded transition-colors duration-300 transform hover:scale-105">Home</Link>
                    <Link href="/about" className="mr-5 hover:text-white hover:bg-[#252B42] p-2 rounded transition-colors duration-300 transform hover:scale-105">About</Link>
                    <Link href="/blog" className="mr-5 hover:text-white hover:bg-[#252B42] p-2 rounded transition-colors duration-300 transform hover:scale-105">Blog</Link>
                    <Link href="/contact" className="mr-5 hover:text-white hover:bg-[#252B42] p-2 rounded transition-colors duration-300 transform hover:scale-105">Contact</Link>
                </nav>
                <button className="inline-flex items-center bg-blue-700 border-0 p-2 px-3 focus:outline-none hover:bg-[#252B42] rounded text-white mt-4 md:mt-0 transition-colors duration-300"><Link href="https://github.com/HammadFazal">Github</Link></button>
            </div>
        </header>
    )
}
