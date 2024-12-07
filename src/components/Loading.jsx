import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl text-red-500'>Loading......<span className="loading loading-spinner loading-lg"></span> </h1>
        </div>
    );
};

export default Loading;