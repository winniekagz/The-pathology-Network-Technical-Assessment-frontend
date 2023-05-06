import React from 'react'
import TopNav from './TopNav'

export default function Layout({children}) {
  return (
    <>
    <TopNav />
    {children}
    </>
    // <div className=' grid grid-cols-1 gap-0'>
    //   <div className=""><TopNav /></div>
      
        
    //    {children}
    // </div>
  )
}
