import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
  const [Values, setValues] = useState({
    username: "", 
    email: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();
const change = (e) => {
  const{ name, value } = e.target;
  setValues({...Values,[name]: value});

}
const submit = async () =>{
  try{
    if(
      Values.username === "" ||
       Values.email === "" || 
       Values.password === "" ||
        Values.address === "" 
       ){
      alert("All fields are required");
    }
    else
    {
     const response = await axios.post(
      "http://localhost:3000/api/v1/sign-up",
      Values
     );
     alert(response.data.message);
     navigate("/sign-in");
    };
  
    
    

  } catch(error){
    alert(error.response.data.message);
  }
}
  return (
    <div className="h-screen bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-xl font-bold mb-6 text-center">Sign Up</p>
          <div className="mt-4">
            <label  className=" text-zinc-700">Username</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder='username'
              name='username'
              required
              value={Values.username}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder='xyz@gmail.com'
              name='email'
              required
              value={Values.email}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className=" text-zinc-900">Password</label>
            <input
              type="password"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder='password'
              name='password'
              required
              value={Values.password}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className=" text-zinc-900">Address</label>
            <textarea
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              rows="5"
              placeholder='address'
              name='address'
              required
              value={Values.address}
              onChange={change}
            />
          </div>
          <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 font-semibold rounded-md hover:bg-blue-600 transition duration-300" 
            onClick={submit}
          >
            Sign Up
          </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
            Or
          </p>
          <p className='flex mt-4 items-center justify-center text-zinc-500 font-semibold'>
            Already have an account? &nbsp;
            <Link to="/sign-in" className='hover:text-blue-500'>
            <u>LogIn</u>
            </Link>
          </p>
        
        
       
      </div>
    </div>
  );
};

export default SignUp;