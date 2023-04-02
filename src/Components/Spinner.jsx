import React from 'react'
import { Comment } from 'react-loader-spinner';

const Spinner = () => {
        return (
                <div className='flex flex-col items-center justify-center font-semibold h-[100vh]'>
                        <Comment
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="comment-loading"
                                wrapperStyle={{}}
                                wrapperClass="comment-wrapper"
                                color="#fff"
                                backgroundColor="#808080"
                        />
                        Loading... </div>
        )
}

export default Spinner
