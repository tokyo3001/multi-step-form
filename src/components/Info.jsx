import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

function Info() {

  const [email, setEmail] = useState(() => { 
    const saved = localStorage.getItem("email");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [error, setError] = useState(null);
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [phone, setPhone] = useState(() => {
    const saved = localStorage.getItem("phone");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  function isValidEmail (email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    localStorage.setItem('phone', JSON.stringify(phone));
  }, [phone]);

  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(email));
  }, [email]);  

  return (
    <div className='lg:flex'>
      <div>
        <Sidebar />
      </div>
      <div className='lg:ml-36 lg:mt-12 mt-[-450px] p-4'>
        <p className='lg:text-4xl font-bold text-3xl '>Personal info</p>
        <p className='mt-3 font-mono text-slate-500'>Please provide your name, email address, and phone number.</p>
        <p className='mt-8'>Name</p>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='e.g.Stephen King' 
          className='rounded-md p-3 mt-2 shadow-sm w-full shadow-slate-400'
          required
        />
        <p className='mt-8'>Email Address</p>
        <input 
          type="email" 
          value={email}
          onChange={handleChange}
          placeholder='e.g.stephenking@gmail.com' 
          className='rounded-md p-3 mt-2 shadow-sm w-full shadow-slate-400'
          required
        />
        {error && <p className=' text-red-600'>{error}</p>}
        <p className='mt-8'>Phone Number</p>
        <input 
          type="number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='e.g.+1 234 567 890' 
          className='rounded-md p-3 mt-2 shadow-sm w-full shadow-slate-400'
          required
        />
        <div className='lg:mt-28 mt-24 float-right lg:mb-0 mb-10'>
          {email === "" 
          ?
          <Link to='/plans' className='rounded-md pointer-events-none bg-blue-900 hover:bg-blue-700 text-white lg:p-4 p-2  font-bold'>
            Next Step
          </Link> :
          <Link to='/plans' className='rounded-md bg-blue-900 hover:bg-blue-700 text-white lg:p-4 p-2 font-bold'>
          Next Step
        </Link>}
        </div>
      </div>
    </div>
  )
}

export default Info