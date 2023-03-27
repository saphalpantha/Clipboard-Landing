import React from 'react'

const Hero = () => {
  return (
        <section id="hero">
                <div className='section-container mb-40 px-10 pt-16'>
                        <img className='mx-auto my-16' src="/images/logo.svg"/>
                        <h3>
                            A history of everything you copy
                        </h3>
                        <p className='max-w-3xl mx-auto mb-10 text-2xl text-grayishBlue'>
                            Clipboard allows you to track and organize everything you copy.
                            Instantly access your clipboard on all your devices
                        </p>
                        <div className='button-container'>
                            <a className='p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'>
                                Download For iOS
                            </a>
                            <a className='p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'>
                                Download For Mac
                            </a>
                        </div>
                </div>
            </section>
  )
}

export default Hero