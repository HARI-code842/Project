import React, { useEffect,useState } from 'react';
import axios from "axios";
import Loader from '../components/Loader/Loader'
import Eventcard from '../components/Eventcard/Eventcard'
const EventLists = () => {
    const [Data, setData] =useState();
    useEffect(() => {
      const fetch = async () =>
      {
        const response = await axios.get("http://localhost:3000/api/v1/get-all-events"
  
        );
        setData(response.data.data);
      };
      fetch();
  
    }, []);
  return (
    <div className='bg-zinc-900 h-auto px-12 py-8'><h4 className='text-3xl   text-yellow-100 '>EVENT LISTS</h4>
    <div className='my-8 grid md:grid-cols-4 gap-8'>
      {!Data && <div className='flex items-center justify center my-8'><Loader /></div>}
      {Data && Data.map((items,i) =>(
        <div key={i}>
          <Eventcard data={items} />{" "}
           </div>))}
    </div></div>
  )
}

export default EventLists
