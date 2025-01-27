import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';


const Eventcard = ({data, favourites}) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };
  const handleRemoveEvent = async()=>{
    const response= await axios.put("http://localhost:3000/api/v1/delete-event-from-favourite",
      {},
      {headers}
    );
    alert(response.data.message);
  };
    
  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>
   <Link to={`/view-event-details/${data._id}`}>
   <div className='bg-zinc-800 rounded p-4 flex-col'>
    <div className='bg-zinc-900 rounded flex items-center justify-center'><img src={data.url} alt='/' className='h-[25vh]'/> </div>
    <div className='bg-zinc-900'>
        
        </div>
        <h2 className='mt-4 text-xl text-zinc-200 font font-semibold '>{data.title}</h2>
        
        </div>
   </Link>
   {}
   {favourites && (
    <button className='bg-yellow-100  px-4 py-2 rounded border border-yellow-500 text-yellow-500  mt-4'
    onClick={handleRemoveEvent}>
          Remove from favourite</button>
   )}
   </div>
  );
};

export default Eventcard