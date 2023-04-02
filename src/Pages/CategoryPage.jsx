import React from 'react'
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';
import { useLocation, useNavigate, } from 'react-router-dom';

const CategoryPage = () => {
        const navigation = useNavigate();
        const location = useLocation();
        const category = location.pathname.split('/').at(-1);

        return (
                <div className="text-center w-full h-full flex flex-col justify-between">
                        <Header />
                        <div>
                                <button onClick={() => { navigation(-1); }}>Back</button>
                                <h2>Blogs On  <span className='underline'>#{category}</span> </h2>
                        </div>
                        <div>
                                <Blogs />
                                <Pagination />
                        </div>
                </div>
        )
}

export default CategoryPage
