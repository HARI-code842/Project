import React, { useState}from 'react'
import { useEffect } from 'react'
import axios from "axios"
import EventCard from "../Eventcard/Eventcard"
const Favourites = () => {
    const [FavouriteEvents, setFavouriteEvent] = useState()
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
    useEffect(() => {
     const fetch = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/get-favourite-events",
        {headers}
    );
    setFavouriteEvent(response.data.data)
     };
     fetch();    
    }, []);
    
  return (
    <div className='grid grid-cols-4 gap-4 '>
        {FavouriteEvents && FavouriteEvents.length === 0 &&(
            <div className='text-5xl font-semibold text-zinc-500'>
                No Favourite Books
                </div>
        )}
        {FavouriteEvents && FavouriteEvents.map((items,i)=>(
            <div key={i}>
            <EventCard data ={items} favourites={true}/>
        </div>
       ))}
    </div>
  )
}

export default Favourites