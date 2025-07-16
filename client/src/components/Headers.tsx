import React from 'react'

const Headers = ({title, subtitle}: HeaderProps) => {
  return (
    <div className='mb-5'>
      <div className='text-xl font-semibold'>{title}</div>
      <div className='text-sm text-gray-500 mt-1'>{subtitle}</div>
    </div>
  );
};

export default Headers;
