import React, { useEffect,useState } from 'react';
import axios from "axios";
import Eventcard from '../Eventcard/Eventcard';
import Loader from '../Loader/Loader';


const RecentlyAdded = () => {
  const [Data, setData] =useState();
  useEffect(() => {
    const fetch = async () =>
    {
      const response = await axios.get("http://localhost:3000/api/v1/get-recent-events"

      );
      setData(response.data.data);
    };
    fetch();

  }, []);
  
  return (
    <div className='mt-8 px-8'>
      <h4 className='text-3xl   text-yellow-100 '>Recently Added events</h4>
      <div className='my-8 grid md:grid-cols-4 gap-4'>
        {!Data && <div className='flex items-center justify center my-8'><Loader /></div>}
        {Data && Data.map((items,i) =>(
          <div key={i}>
            <Eventcard data={items} />{" "}
             </div>))}
      </div>
    </div>
  )
}

export default RecentlyAdded