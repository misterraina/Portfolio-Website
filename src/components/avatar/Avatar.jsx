import React from 'react'
import phto from './two.jpg'

export default function Avatar() {
  return (
    <div>
      
<div className="flex items-center gap-4">
    <img className="w-10 h-10 rounded-full" src={phto} alt="no img"/>
    <div className="font-medium dark:text-white">
        <div>Ayush Raina</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Web Developer</div>
    </div>
</div>

    </div>
  )
}
