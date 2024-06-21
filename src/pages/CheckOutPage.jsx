import React from 'react'
import Navbar from '../components/Navbar';

const CheckOutPage = () => {
  return (
    <>
      <Navbar />
      <div className='absolute w-[65%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  flex-col justify-center items-center p-10 border-2 rounded-md shadow-lg'>
        <h1 className='font-semibold text-3xl  flex justify-center'>CheckOut</h1>
        <h2 className='text-2xl mt-2'>Thank you for your Order.</h2>
      </div>
    </>
  )
}

export default CheckOutPage