
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    const emailRes = document.getElementById('email')
    const paswordRes = document.getElementById('password')
    emailRes.value = ''
    paswordRes.value = ''
    console.log('email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='flex flex-col text-white gap-6 justify-center items-center border-2 w-96 h-96 rounded-lg'>
        <h2 className='text-3xl'>Login</h2>
        <input type="text" id='email' placeholder="  Enter your Email" className=' h-10 text-black rounded-lg' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" id='password' placeholder="  Enter Your Password" className='h-10 text-black rounded-lg' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleLogin} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-lg'>Sign in</button>
      </div>
    </div>
  );
};

export default LoginForm;
