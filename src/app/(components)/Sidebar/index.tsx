'use client'

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Menu } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  };

  const sidebarClasses = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClasses}>
      <div className={`flex justify-between md:justify-normal items-center pt-8 gap-3 ${isSidebarCollapsed ? 'px-5' : 'px-8'}`}>
        <div>logo</div>
        <h1 className={`font-extrabold text-2xl ${isSidebarCollapsed ? 'hidden' : 'block'}`}>INV</h1>
      </div>

      <div
        className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:cursor-pointer w-[35px]"
        onClick={toggleSidebar}
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

export default Sidebar;
