import WaletBody from '@/components/molecules/walet/WaletBody'
import WaletHeader from '@/components/molecules/walet/WaletHeader'
import React from 'react'

const Walet = () => {
  return (
    <div  className="m-5 bg-white shadow-sm rounded-md p-5">
       <WaletHeader/>
       <WaletBody/>
    </div>
  )
}

export default Walet