import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
    const [title , setTitle] = useState("");
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    function createPaste(){
        const paste = {
            title : title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }

        if(pasteId){
            dispatch(updateToPastes(paste ));
        }
        else{
            dispatch(addToPastes(paste));
        }
        // after creation and updation clearing of area
        setTitle('');
        setValue('');
        setSearchParams({});

    }
  return (
   <div>
     <div className='p-2  rounded-sm place-content-evenly'>
     <input type="text"
     placeholder='Enter title here'
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
     />
     <button onClick={createPaste} className='p-2  rounded-sm'>
        {pasteId ? "Update My Paste" : "Create My Paste"}
     </button>
    </div>
    <div>
        <textarea 
        className='mt-4 rounded-2xl p-3 min-w-112.5 border flex justify-center items-center  bg-black'
        value={value}
        placeholder='enter your text here'
        onChange={(e) => setValue(e.target.value)}
        rows={20}
        />
    </div>
   </div>
  )
}

export default Home
