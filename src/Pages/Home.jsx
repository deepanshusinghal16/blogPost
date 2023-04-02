import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';


const Home = () => {
        return (
                <div className="text-center w-full h-full flex flex-col justify-between mt-[4rem]">
                        <Header />
                        <Blogs />
                        <Pagination />

                </div>
        )
}

export default Home
