'use client'
import React, { lazy, useState, useCallback } from 'react'
import Background from './Background'
import bg from '@/assets/images/beijing.jpeg'
import addressBg from '@/assets/images/address.png'

export default function Course() {
  return (
    <>
      <div className="w-[1200px] mx-auto mb-[32px] mt-[32px]">
        <div className="mt-4">
          <h1 className="text-[20px] py-[10px] font-medium  mb-[20px]">
            关于我们
          </h1>

          <div className="flex" id='about'>
            <div className="w-[550px] h-[400px] relative flex-none rounded-[2px] overflow-hidden">
              <Background src={bg} alt="" />
            </div>
            <div className="flex flex-col ml-[80px]">
              <h1 className='text-[20px] mt-[20px]'>南京恒企职业培训机构</h1>
              <div className="pt-[5px] text-[#666] text-[16px]" style={{ letterSpacing: 2 }}>
              南京恒企职业培训机构业务涵盖财经类职业教育、IT类职业教育、设计类职业教育、产教融合、高端课程研发、图书文化出版、海外市场拓展等各个领域。恒企教育学校旨在为学员提供“一生一世”的终身职业教育服务，目前以“自营为主、加盟为辅”的连锁经营形式，在全国23个省市、150多个城市开办了近300家网点。教学优势,恒企教育基于“互联网+教育”、“教育+科技”的经营思想，依托全国教育网点资源和领 先的互联网技术，正在全力打造一所无边界的互联网企业大学。通过线上云网校、全国终端网点，打造行业领 先的移动学习方案，真正实现学员随时随地学习、无忧学习、高效学习，将中国优质的教育资源覆盖全国，实现了教育的公平与高效。恒企教育依托强大的资源赋能，正在迅速成为一家行业领 先的在线教育机构。恒企教育坚守着教育的初心，作为专业有温度的教育机构，承担起成为中国职业教育资源的整合者，国家职业教育标准的参与者和国际职业教育的传播者的社会职责，为国家的教育事业贡献最 大的能量！
              </div>
            </div>
          </div>

          <div className="flex mt-[100px] items-center" id='address'>
            <div className="flex flex-col">
              <h1 className='text-[20px] mt-[20px]'>联系我们</h1>
              <div className="pt-[15px] text-[#666] text-[16px]" style={{ letterSpacing: 2 }}>
                公司地址：南京市江北新区大桥北路48号弘阳A2区四层4050-4053 4068-4069室
              </div>
            </div>
            <div className="w-[550px] h-[400px] relative flex-none rounded-[2px] overflow-hidden">
              <Background src={addressBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
