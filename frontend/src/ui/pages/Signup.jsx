import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { useState } from 'react';

export const Signup = () => {
    const [errorMsg,setErrorMsg] = useState("");
    return <>
        <div className='flex items-center justify-center h-screen flex-col gap-8'>
        <Card className="my-2">
          <div className='text-black text-3xl font-bold text-center mb-4'>Create Account</div>
          <div className='mb-10'>
            <Input label="Email" size="lg" placeholder="Enter your email"/>
            <Input label="Password" size="lg"placeholder="Enter your password" type="password"/>
          </div>
          {errorMsg ? 
            <div className='text-red-500 text-lg text-center'>{errorMsg}</div> 
          : null}
          <Button size="lg" variant="primary" label="Sign Up"/>
        </Card>
        <div className='text-brand-700 text-lg'>
          Already registered? <a className='font-bold hover:underline' href="">Sign In</a>
        </div>
      </div>
    </>
}