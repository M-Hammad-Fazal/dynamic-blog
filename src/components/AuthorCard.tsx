import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
        <div className='flex items-center animate-fade-in'>
            <Image className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-gray-500' src="/images/me.jpg" alt='image' height={200} width={200}/>
            <div>
                <h3 className='text-xl font-bold'>Muhammad Hammad</h3>
                <p className='text-slate-400'>Web Developer</p>
            </div>
        </div>
        <p className='mt-4 text-gray-800 leading-relaxed'>I am a dedicated web developer with a strong focus on building robust and scalable web applications. My expertise lies in the Next.js framework, which I leverage to create high-performance, server-side rendered React applications.I excel in crafting pixel-perfect interfaces and seamless user experiences. My passion for front-end development is matched by my proficiency in backend technologies, ensuring comprehensive solutions from concept to deployment.</p>
        <div className='mt-4 flex space-x-3'>
            <Link className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300' href="https://www.linkedin.com/in/hammad-mehmood-457735309/">Linkedin</Link>
            <Link className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300' href="https://vercel.com/hammad-mehmoods-projects">Vercel</Link>
        </div>
    </div>
  )
}
