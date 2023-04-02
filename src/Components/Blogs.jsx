import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';
import NoData from './NoData';

const Blogs = () => {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className='flex flex-col justify-center items-center text-left max-w-[680px] w-[80%] sm:w-[60%] mx-auto '>
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (<NoData />) : (

                                posts.map((post) => (
                                    <Card key={post.id} post={post} />
                                )
                                )
                            )
                    )
            }
        </div>
    )
}

export default Blogs
