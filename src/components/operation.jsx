import React from 'react';

export default function Operation({ operation }) {
    const { header, desc, icon } = operation
    return (
        <div className='flex flex-col items-center  space-y-1 w-[400px]'>
            <img src={icon} alt="not exist" className='w-30 h-14 object-cover mb-3' />
            <header className='font-bold'>{header}</header>
            <p className='font-[10px] text-slate-300'>{desc}</p>
        </div>
    );
}

Operation.propTypes = {
    operation: PropTypes.object
};