import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const { handlePageChange, page, totalPage } = useContext(AppContext)
    return (
        <div className='fixed bottom-0 w-full bg-white'>
            <hr />
            <div className='py-[0.8rem] max-w-[680px] w-[80%] sm:w-[60%] mx-auto flex justify-between '>
                <div className='flex gap-[0.5rem]  '>

                    {
                        page > 1 &&
                        <button className='border-2 rounded-md w-[5rem]' onClick={() => handlePageChange(page - 1)}>
                            Previous
                        </button>
                    }
                    {
                        page != totalPage &&
                        <button className='border-2 rounded-md w-[5rem]' onClick={() => handlePageChange(page + 1)}>Next</button>
                    }


                </div>

                <div>
                    Page <span className='font-medium'>{page}</span> of <span className='font-medium'>{totalPage}</span>
                </div>
            </div>
        </div>
    )
}

export default Pagination
