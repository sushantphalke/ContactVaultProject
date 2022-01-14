import React from 'react';
import loading from './loading.gif';

export const LoadingSpinner = () => {
    return (
        <div className='container'>
            <p id='mining'>Mining...</p>
            <img
                src={loading}
                alt='Loading...'
                style={{ width: '200px', margin: 'auto' }}
            />
        </div>
    );
};
