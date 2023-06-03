'use client'

import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div className='loading-container'>
      <ReactLoading type={'balls'} color={'orange'} height={100} width={100} className='loading' />
    </div>
  );
}
