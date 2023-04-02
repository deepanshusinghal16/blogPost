import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ post }) => {
        return (
                <div className='my-2' >
                        <NavLink to={`/blog/${post.id}`}>
                                <span className='font-semibold text-xl sm:text-2xl font-[Montserrat] '>{post.title}</span>
                        </NavLink>
                        <p className='text-md'>
                                By
                                <span className='mx-1 font-medium italic '>{post.author}</span>
                                on
                                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                                        <span className='mx-1 '>{post.category}</span>
                                </NavLink>
                        </p>
                        <p className='text-sm'>
                                Posted On {post.date}
                        </p>
                        <br />
                        <p className='text-sm  '>{post.content}</p>
                        <p>

                                {
                                        post.tags.map((tag, index) => (

                                                <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
                                                        <span key={index} className='text-blue-500 underline px-1 text-sm'> {`#${tag}`}</span>
                                                </NavLink>

                                        ))
                                }
                        </p>
                        <br /><br />
                </div >

        )
}

export default Card
