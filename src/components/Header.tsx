'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'

type HeaderProps = {}

export default function Header(props: HeaderProps) {
  
  const [path, setPath] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(()=> {
   
  },[])

  return (
    <>
      <header className="fixed top-0 z-50 w-full h-[68px] flex-none text-sm leading-6 backdrop-blur duration-500 bg-[#fff] transition-colors shadow-navShadow">
        <nav className="mx-auto max-w-container h-full px-4 relative">
          <div className="relative flex items-center justify-between h-full">
            <div className='flex items-center'>
              <a
                className="flex items-center flex-none"
                href="/"
              >
                <div className="relative overflow-hidden">
                  <Logo />
                </div>
              </a>
              <div className="ml-[80px] text-[16px] text-[#444] flex gap-x-5">
                <a
                  href="/"
                  className={`hover:text-[#12bfaf] sm:text-sm text-[14px] font-normal ${
                    path == '/' && 'text-[#12bfaf]'
                  }`}
                >
                  首页
                </a>
                <a
                  href="#course"
                  className={`ml-8 hover:text-[#12bfaf] sm:text-sm text-[16px] font-normal ${
                    path == '/weimob-open' && 'text-[#12bfaf]'
                  }`}
                >
                  课程
                </a>
                <a
                  href="#about"
                  className={`ml-8 hover:text-[#12bfaf] sm:text-sm text-[16px] font-normal ${
                    path == '/tech-activity' && 'text-[#12bfaf]'
                  }`}
                >
                  简介
                </a>
                <a
                  href="#address"
                  className={`ml-8 hover:text-[#12bfaf] sm:text-sm text-[16px] font-normal ${
                    path == '/tech-activity' && 'text-[#12bfaf]'
                  }`}
                >
                  联系我们
                </a>
              </div>
            </div>
           
          </div>
        </nav>
      </header>
    </>
  )
}
