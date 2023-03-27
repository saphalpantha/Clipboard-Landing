import React, { Fragment } from 'react'

const Features = () => {
  return (
    <Fragment>

    <section id="features">
        <div className='section-container my-20'>
            <div className='relative flex flex-col md:flex md:flex-row md:space-x-32'>
                <div className='md:w-1/2'>
                <img src="/images/image-computer.png" className='md:absolute top-0 right-[50%]'></img>
                </div>
                <div className='flex flex-col justify-center mt-16 mb-24 text-xl space-y-12 md:mb-60  md:text-left md:pl-16' >
                    <div className=''>
                        <h3 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h3>
                        <p className='max-w-md text-grayishBlue'> Easily search your snippets by content category web address application and more</p>
                    </div>
                    <div className=''>
                        <h3 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h3>
                        <p className='max-w-md text-grayishBlue'> Easily search your snippets by content category web address application and more</p>
                    </div>
                    <div className=''>
                        <h3 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>Quick Search</h3>
                        <p className='max-w-md text-grayishBlue'> Easily search your snippets by content category web address application and more</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section id="access">
        <div className='section-container my-20'>
                <h3>Access Clipboard Anywhere</h3>
                <p className=' mx-auto mb-24 text-xl leading-9 max-w-md text-center text-grayishBlue'> Easily search your snippets by content category web address application and more</p>
                <img src="/images/image-devices.png" className='mx-auto'></img>
        </div>

    </section>
    </Fragment>
  )
}

export default Features