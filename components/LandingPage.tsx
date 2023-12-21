import React from 'react'
import CtaButton from './CtaButton';

const LandingPage = () => {
  return (
    <section className="w-full h-full bg-landing-page bg-cover bg-center bg-no-repeat py-20">
      <div className='flex flex-col items-start gap-6'>
        <h1 className='text-6xl leading-snug text-black font-extrabold'>
          Welcome To<br/>My Notes Manager!
        </h1>
        <p>One safe place for all your important notes.</p>
      </div>

      <div className='mt-20 flex items-center justify-start gap-6'>
          <CtaButton primary className='w-[150px]'>
            Login
          </CtaButton>

          <CtaButton primary outline className='w-[150px]'>
            Signup
          </CtaButton>
        </div>
    </section>
  )
}

export default LandingPage;