import React from 'react';
import error from '../../assets/404-error.gif';
// import Header from '../Share/Header/Header';

const NotFound = () => {
    return (
        <div>
            {/* <Header></Header> */}

            {/* Image is center: grid place-content-center(horizontally) place-items-center(vertically) */}
            <div className='grid place-content-center place-items-center text-center bg-black'>
                {/* Add an gif file */}
                <img className='w-screen h-screen' src={error} alt="error" />
                <a href="/" className='bg-black rounded-md'>
                    <button className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-4">
                        Home Page
                    </button>
                </a>
            </div>
        </div>
    );
};

export default NotFound;