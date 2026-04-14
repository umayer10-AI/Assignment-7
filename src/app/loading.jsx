import React from 'react';

const loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <span className="loading loading-spinner text-accent h-15 w-15"></span>
        </div>
    );
};

export default loading;