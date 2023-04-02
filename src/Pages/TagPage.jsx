import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom'


const TagPage = () => {
        const navigation = useNavigate();
        const location = useLocation();

        const tag = location.pathname.split('/').at(-1);

        return (
                <div className="text-center w-full h-full flex flex-col justify-between mt-[4rem]">
                        <Header />
                        <div className='flex flex-col justify-center items-center text-left max-w-[680px] w-[80%] sm:w-[60%] mx-auto '>
                                <div className=' w-full flex justify-start'>
                                        <button onClick={() => navigation(-1)}
                                                className='border-2 rounded-md w-[5rem]'>
                                                Back
                                        </button>
                                </div>
                        </div>
                        <Blogs />
                        <Pagination />
                </div>
        )
}

export default TagPage
