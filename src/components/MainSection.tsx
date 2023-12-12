import React from 'react'
import CtaButton from './CtaButton';

const MainSection = () => {
  return (
    <main className="h-screen bg-landing-page bg-cover bg-center bg-no-repeat p-20">
      <div className='flex flex-col items-start gap-6'>
        <h1 className='text-6xl leading-snug text-black font-extrabold'>
          Welcome To<br/>My Notes Manager!
        </h1>
        <p>Once safe place for all your important notes.</p>
      </div>
      <div>
        <CtaButton>
          Login
        </CtaButton>
      </div>
    </main>
  )
}

export default MainSection;