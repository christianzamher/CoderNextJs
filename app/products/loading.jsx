import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <>
     <div className=" top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
</div>
    </>
  )
}

export default Loading