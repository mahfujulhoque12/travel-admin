import TopLeft from '@/components/molecules/Topbar/TopLeft'
import TopRight from '@/components/molecules/Topbar/TopRight'
import React from 'react'

const Topbar = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 py-2.5 px-6 bg-white shadow-sm rounded-md m-5'>
        <div>
            <TopLeft/>
        </div>
        <div className='flex items-center justify-end'>
            <TopRight/>
        </div>

    </div>
  )
}

export default Topbar