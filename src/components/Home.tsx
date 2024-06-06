
'use client'
import React, { lazy, useState, useCallback } from 'react'
import IndexSearch from '@/components/IndexSearch'
import Course from './Course'
import About from './About'

interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <>
      <IndexSearch />
      <Course />
      <About />
    </>
  )
}