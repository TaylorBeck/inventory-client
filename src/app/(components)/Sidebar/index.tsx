'use client'

import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="flex justify-between md:justify-normal items-center pt-8 gap-3">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">INV</h1>
      </div>

      <div
        className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:cursor-pointer w-[35px]"
        onClick={() => {}}
      >
        <Menu className="w-4 h-4" />
      </div>

      <div className="flex-grow mt-8">
        {/* NAV */}
      </div>

      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 INV
        </p>
      </div>
    </div>
  )
}

export default Sidebar