import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { CircleLoader } from 'react-spinners';

const Blogs = () => {
    const { loading, posts } = useContext(AppContext);

    return (
        <div className='flex flex-col justify-center items-center text-left max-w-[680px] w-[80%] sm:w-[60%] mx-auto mt-[4rem]'>
            {
                loading ? (
                    <div className='w-[]'><CircleLoader /> Loading... </div>) :

                    (
                        posts.length === 0 ? (
                            <div>
                                <h2 className='text-2xl font-bold text-gray-800'>Oops..!</h2>
                                <h3 className='text-2xl font-bold text-gray-800'>No Post Available</h3>
                            </div>) : (
                            
                            posts.map((post) => (
                                <div key={post.id} className='my-2' >
                                    <p className='font-semibold text-xl sm:text-2xl'>{post.title}</p>
                                    <p className='text-md'>
                                        By 
                                        <span className='mx-1 font-medium italic '>{post.author}</span>
                                        on
                                        <span className='mx-1 '>{post.category}</span>

                                    </p>
                                    <p className='text-sm'>
                                        Posted On {post.date}
                                    </p>
                                    <br/>
                                    <p className='text-sm'>{post.content}</p>
                                    <p>

                                        {
                                            post.tags.map((tag,index) => (
                                                <span key={index} className='text-blue-500 underline px-1 text-sm'> {`#${tag}`}</span>
                                            ))
                                        }

                                    </p>
                                    <br /><br />    
                                </div>
                            )
                            )
                        )
                    )
            }
        </div>
    )
}

export default Blogs
