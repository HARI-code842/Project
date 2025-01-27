import React, { useEffect,useState } from 'react';
import axios from "axios";
import Loader from '../Loader/Loader';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ViewEventDetails = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [Data, setData] =useState();
    const isLoggedIn = useSelector((state) =>state.auth.isLoggedIn);
    const role = useSelector((state) =>state.auth.role);
    
    useEffect(() => {
      const fetch = async () =>
      {
        const response = await axios.get(`http://localhost:3000/api/v1/get-event-by-id/${id}`
  
        );
     
        setData(response.data.data);
      };
      fetch();
  
    }, []);
    const headers = {
      id: localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
      eventid: id,
    };
    const handleFavourite = async () => {
      const response = await axios.put("http://localhost:3000/api/v1/add-event-to-favourite",
      {},
      {headers}
    )
    alert(response.data.message);
    }
    const deleteEvent = async () => {
     const response = await axios.delete("http://localhost:3000/api/v1/delete-event", {headers})
     alert(response.data.message);
     navigate("/event-lists");
    }
   
  
  return (
    <>
    { Data &&  (<div className='px-12 py-8 bg-zinc-900 flex gap-8'>
        <div className='bg-zinc-800 rounded px-4 py-12 w-full lg:w-3/6 flex items-center justify-around '>
        <img src={Data.url} alt="/" className='h-[70vh] rounded'/>
        </div>
        {isLoggedIn == true && role == "user" && (<div className='flex md:flex-col'>
          <button className='bg-white rounded-full text-3xl p-2 text-red-500'
          onClick={handleFavourite}>
            
            <FaHeart />
          <spam className="ms-4 block lg:hidden">Favoutites</spam></button>
          
        </div>)}
        {isLoggedIn == true && role == "admin" && (<div className='flex md:flex-col'>
          <Link to={`/updateEvent/${id}`} className='bg-white rounded-full text-3xl p-2 '><FaEdit />
          <spam className="ms-4 block lg:hidden">Edit Event</spam></Link>
          <button className='bg-white rounded-full text-3xl p-2 text-red-500'
          onClick={deleteEvent}
          >
            <MdDelete />
          <spam className="ms-4 block lg:hidden">Delete Event</spam></button>
          
        </div>)}
        <div className='p-4 w- 3/6'>
       <h1 className='text-4xl text-zinc-300 font-semibold'> {Data.title}</h1>
       <p className='text-zinc-500 mt-4 text-xl'>{Data.desc}</p>
        </div>
    </div>)}
    {!Data && <div className='h-screen bg-zinc-900 flex items-center justify-center'><Loader /></div>}
   
    </>
  )
}

export default ViewEventDetails