"use client"
import React from 'react'

type FooterProps = {}

export default function Footer(props: FooterProps) {
  return (
    <>
      <footer id='footer' className="mx-auto mt-0 w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900/5 py-10">
          <p className="text-center text-sm leading-6 text-slate-500 flex flex-col">
            <span>地址：南京市江北新区大桥北路48号弘阳A2区四层4050-4053 4068-4069室</span>
            <span>南京希诺恒企教育咨询服务有限公司©版权所有</span>
            {/* <span className='pl-3'>粤ICP备09027680号</span> */}
          </p>
        </div>
      </footer>
    </>
  )
}
