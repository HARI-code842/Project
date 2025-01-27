import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { GiPartyPopper } from "react-icons/gi";
const Navbar = () => {
    const links=[
        {
            title:"Home",
            link:"/",
        },
       
        {
            title:"Event Lists",
            link:"/event-lists",
        },
        {
            title:"Profile",
            link:"/profile",
        },
        {
            title:" Admin Profile",
            link:"/profile",
        },
        
        
    ];
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const role = useSelector((state)=>state.auth.role)
    if(isLoggedIn == false)
    {
        links.splice(2);
    }
    if (isLoggedIn == true && role == "user")
        {
            links.splice(3,1);
        }
    if (isLoggedIn == true && role == "admin")
    {
        links.splice(2,1);
    }

   
  return (
    <div className=' flex bg-zinc-800 text-white px-8 py-2 items-centre justify-between'> 
    <Link to="/" className='flex items-centre'>
    <GiPartyPopper className='bg-zinc-800  text-4xl p-2 '/>
        <h1 className='text-2xl font-semibold'>EventSphere</h1>
    </Link>
   <div className='nav-links-Eventsphere flex items-centre gap-4 '>
   <div className=' flex gap-4'>
   {links.map((items, i)=>(
    <div className='flex items-center justify-center'>
    {items.title == "Profile" || items.title == "Admin Profile" ? <Link
    to={items.link}
    className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-duration-300' 
    key={i}
    >
        {items.title}</Link>:<Link
    to={items.link}
     className='hover:text-blue-500 tarnsition-all duration-300' 
    key={i}
    >
        {items.title}</Link>}
    </div>
    ))}
   </div>
   <div className='flex gap-4'>
    {isLoggedIn==false && 
        <>
        <Link
        to="/sign-in"
         className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-duration-300'>LogIn</Link>
       <Link
       to="/sign-up" className='px-4 py-1 bg-blue-500 text-zinc-800 rounded hover:bg-white hover:text-zinc-800 transition-duration-300'>SignUp
       </Link>
       </>
    }
   </div>
   </div>
    
    </div>
  )
}

export default Navbar