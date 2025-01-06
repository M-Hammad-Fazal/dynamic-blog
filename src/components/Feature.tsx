import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-20'>
        <h2 className='text-center text-3xl font-bold md:text-4xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Feature Blog : The Role of Cybersecurity in Protecting Digital Infrastructure
        </h2>
        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>
        As businesses and individuals increasingly rely on digital platforms, the importance of cybersecurity cannot be overstated. Cyberattacks have become more sophisticated, with threats targeting everything from personal data to critical infrastructure. In this environment, robust cybersecurity measures are crucial to protect digital infrastructure and safeguard sensitive information. This blog explores the role of cybersecurity in today’s digital world, why it is essential, and the best practices for ensuring comprehensive protection against cyber threats.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>
            explore categories
          </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
            {[
              "Technology",
              "Artificial intelligence",
              "HTML",
              "Virtual Reality",
              "Next Js",
              "Web Development",
            ].map((category, index) =>(
              <div key={index} className='relative group py-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
                <p className='text-center text-lg font-semibold'>{category}</p>
                <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'></div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  )
}
