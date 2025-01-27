import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { useParams ,useNavigate} from 'react-router-dom';


const UpdateEvent = () => {
    const [Data, setData] = useState({
        url:"",
        title: "",
        desc: "",
    });
   
      const {id}=useParams();
      const navigate = useNavigate();
      const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        eventid: id,
      };
      const change= (e)=> {
        const{ name, value} = e.target;
        setData({...Data,[name]: value});
      }
      const submit = async () =>
      {
        try {
            if(
                Data.url == ""||
                Data.title == ""||
                Data.desc == ""
            ){
                alert("All fields are required")
            }else{
                const response = await axios.put("http://localhost:3000/api/v1/update-event",
                    Data, 
                    { headers}

                )
                setData({
                    url: "",
                    title: "",
                    desc: ""
                });
                alert(response.data.message)
                navigate(`/view-event-details/${id}`)
            }
        }catch(error){
            alert(error.response.data.message)
           
        }
      }
      useEffect(() => {
        const fetch = async () =>
        {
          const response = await axios.get(`http://localhost:3000/api/v1/get-event-by-id/${id}`
    
          );
       
          setData(response.data.data);
        };
        fetch();
    
      }, []);
  return (
    <div className='bg-zinc-900 h-screen p-0 md:p-4'>
    <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
        Update Evenet 
    </h1>
    <div className='p-4 bg-zinc-800 rounded'>
        <div>
            <label htmlFor='' className='ctext-zinc-400'>
                Image
            </label>
            <input
            type="text"
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='url of image'
            name='url'
            required
            value={Data.url}
            onChange={change}
            />
        </div>
        <div className='mt-4'>
            <label htmlFor='' className='text-zinc-400'>
                Title 
            </label>
            <input
            type="text"
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='Title'
            name='title'
            required
            value={Data.title}
            onChange={change}
            />
        </div>
        <div className='mt-4'>
            <label htmlFor='' className='text-zinc-400'>
                Description 
            </label>
            <input
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            row="5"
            placeholder='Title'
            name='desc'
            required
            value={Data.desc}
            onChange={change}
            />
        </div>
        <button 
        className='mt-4 px-3 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-900 transition-all duration-300'
        onClick={submit}
        >
            Update Event
        </button>
    </div>
</div>
  )
}

export default UpdateEvent
