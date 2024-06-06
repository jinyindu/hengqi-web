"use client"
import React from 'react'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
