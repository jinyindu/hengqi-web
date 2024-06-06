'use client'
import React, { useState } from 'react'
import Background from './Background'
import qrcode from '@/assets/images/qrcode.png'

const data = [
  {
    title: '总账进阶班',
    subtitle: '',
    src: 'course-cover-1',
  },
  {
    title: '主管会计精英班',
    subtitle: '',
    src: 'course-cover-2',
  },
  {
    title: 'R3.0LLL猎鹰计划',
    subtitle: '',
    src: 'course-cover-3',
  },
  {
    title: 'R3.0LLL黑马计划',
    subtitle: '',
    src: 'course-cover-4',
  },
  {
    title: '税务筹划训练营',
    subtitle: '',
    src: 'course-cover-5',
  },
  {
    title: '报表分析训练营',
    subtitle: '',
    src: 'course-cover-6',
  },
  {
    title: '内部控制训练营',
    subtitle: '',
    src: 'course-cover-7',
  },
  {
    title: '财务bp训练营',
    subtitle: '',
    src: 'course-cover-8',
  },
  {
    title: '成本会计成长营',
    subtitle: '',
    src: 'course-cover-9',
  },
  {
    title: 'CPA保过通关班',
    subtitle: '',
    src: 'course-cover-10',
  },
  {
    title: '税务师',
    subtitle: '',
    src: 'course-cover-11',
  },
  {
    title: '小自考',
    subtitle: '',
    src: 'course-cover-12',
  },
  {
    title: '大自考',
    subtitle: '',
    src: 'course-cover-1',
  },
]

export default function Course() {

  const [currentIndex, setCurrent] = useState(-1)

  const handleMourseOver = (index:number) => {
    setCurrent(index)
  }
  const handleMourseLevel = () => {
    setCurrent(-1)
  }

  return (
    <>
      <div className="w-[1200px] mx-auto" id='course'>
        <div className="mt-4">
          <h1 className="text-[20px] py-[10px] font-medium mb-[20px]">热门课程</h1>
          <ul className="flex flex-wrap gap-5">
            {data.map((item, index) => (
              <li key={index} className="w-[285px] min-h-[260px] shadow-inner overflow-hidden rounded-[10px] hover:transform hover:-translate-y-2 hover:ease-out cursor-pointer">
                <div className="relative w-full h-[150px]">
                  <Background
                    src={require(`@/assets/images/${item.src}.png`)}
                    className=''
                    alt=""
                  />
                </div>
                <div className='pt-[20px] text-[18px] font-bold pl-[20px]'>{item.title}</div>
                <div className='w-full flex justify-center my-[20px] relative'>
                    <button className='w-[130px] h-[35px] mx-auto bg-[#12bfaf] rounded-[20px] text-[#fff] text-center' onMouseOver={()=>handleMourseOver(index)} onMouseLeave={handleMourseLevel}>课程详细咨询</button>
                     {
                      currentIndex === index && 
                      <div className='absolute -top-[180px] bg-[#fff] p-[10px] z-50 shadow-inner flex justify-center items-center rounded-[5px]'>
                        <div className='w-[150px] h-[150px] rounded-[6px] relative'>
                          <Background src={qrcode} alt=''/>
                        </div>
                      </div>
                     }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
