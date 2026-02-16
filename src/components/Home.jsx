import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const Home = () => {
    const [title , setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
  return (
    <div className='p-2  rounded-sm'>
     <input type="text"
     placeholder='Enter title here'
     value={title}
     onChange={(e)=>setTitle(e.target.value)}
     />
     <button className='p-2  rounded-sm'>
        {pasteId ? "Update My Paste" : "Create My Paste"}
     </button>
    </div>
  )
}

export default Home
