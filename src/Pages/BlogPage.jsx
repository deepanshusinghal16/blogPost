import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Spinner from '../Components/Spinner';
import Card from '../Components/Card';
import NoData from '../Components/NoData';

const BlogPage = () => {
        const newbaseUrl = 'https://codehelp-apis.vercel.app/api/';
        const [blog, setBlog] = useState(null);
        const [relatedBlogs, setRelatedBlogs] = useState(null);
        const location = useLocation();
        const navigation = useNavigate();
        const { setLoading, loading, baseUrl } = useContext(AppContext);
        const blogId = location.pathname.split('/').at(-1);

        async function fetchRelatedBlogs() {
                setLoading(true);
                let url = `${newbaseUrl}get-blog?blogId=${blogId}`;
                console.log(url);
                try {
                        const result = await fetch(url);
                        const data = await result.json();
                        // console.log(data);
                        setBlog(data.blog);
                        setRelatedBlogs(data.relatedBlogs);

                }
                catch (err) {
                        console.log(err);
                        // setBlog(null);
                        // setRelatedBlogs([])
                }
                setLoading(false);
        }

        useEffect(() => {
                if (blogId)
                        fetchRelatedBlogs();
        }, [location.pathname])

        return (
                <div className="text-center w-full h-[calc(100vh-4rem)] flex flex-col  mt-[4rem]  items-center justify-start ">
                        <Header />

                        <div className='flex flex-col justify-center items-center text-left max-w-[680px] w-[80%] sm:w-[60%] mx-auto'>
                                <div className=' w-full flex justify-start'>
                                        <button onClick={() => navigation(-1)}
                                                className='border-2 rounded-md w-[5rem]'>
                                                Back
                                        </button>
                                </div>
                                {
                                        loading ? (<Spinner />) :
                                                blog ? (
                                                        <div className=''>
                                                                <Card key={blogId} post={blog} />
                                                                <h2 className='text-2xl underline text-center my-2'>Related Blogs </h2>
                                                                <div>
                                                                        {
                                                                                relatedBlogs.map((post,) => (
                                                                                        <Card key={post.id} post={post} />
                                                                                )
                                                                                )}
                                                                </div>
                                                        </div>
                                                ) : (<NoData />)
                                }
                        </div>
                </div>
        )
}

export default BlogPage
