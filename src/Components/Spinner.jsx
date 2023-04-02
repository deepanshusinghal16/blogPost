import React from 'react'
import { CircleLoader } from 'react-spinners';

const Spinner = () => {
        return (
                <div className='flex flex-col items-center justify-center font-semibold h-[100vh]'><CircleLoader /> Loading... </div>
        )
}

export default Spinner
