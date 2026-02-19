import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Paste = () => {
    const pastes = useSelector((state) => state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }

    function handleShare(paste) {
        const shareUrl = `${window.location.origin}/pastes/${paste._id}`;

        if (navigator.share) {
            navigator.share({
                title: paste.title,
                text: paste.content,
                url: shareUrl,
            });
        } else {
            navigator.clipboard.writeText(shareUrl);
            toast.success("Link copied to clipboard");
        }
    }

    return (
        <div>
            <input className='p-2 rounded-2xl bg-black text-white min-w-87.5'
                type="text"
                placeholder='search here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='flex flex-col gap-4 mt-5'>

                {filteredData.length > 0 && filteredData.map(
                    (paste) => {
                        return (
                            <div className='border' key={paste?._id}>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    {paste.content}
                                </div>
                                <div className='flex flex-row content-center justify-center gap-2 '>
                                    <button>
                                        Edit
                                    </button>
                                    <Link to={`/pastes/${paste._id}`} >
                                        <button>
                                            View
                                        </button>

                                    </Link>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste.content)
                                        toast("copied to clipboard", {
                                            autoClose: 500,
                                        })
                                    }}>
                                        copy
                                    </button>
                                    <button onClick={() => handleDelete(paste.id)}>
                                        delete
                                    </button>
                                    <button onClick={() => handleShare(paste)}>
                                        share
                                    </button>
                                   
                                </div>
                                 <div>
                                        {paste.createdAt}
                                    </div>
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )
}

export default Paste
