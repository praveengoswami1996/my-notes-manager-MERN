import CtaButton from '@components/CtaButton';
import InputField from '@components/InputField';
import MainContainer from '@components/MainContainer';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <MainContainer title={"Login Here"}>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <InputField placeholder='Email Address'/>
                <InputField placeholder='Password'/>
            </div>
            <div>
                <CtaButton primary>
                    Login
                </CtaButton>
            </div>
            <div className='flex items-center gap-2 text-base'>
                <span>Do not have an account yet?</span>
                <Link href={"/register"} className='text-primary font-medium'>
                    Register Here
                </Link>
            </div>
        </div>
    </MainContainer>
  )
}

export default LoginPage;