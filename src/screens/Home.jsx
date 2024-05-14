import React from 'react'
import { Explore } from '../components/Explore'
import { Flexplore } from '../components/Flexplore'
import { ProCard } from '../components/ProCard'
import { Carousel } from '../components/Carousel'

export const Home = () => {
  return (
    <>
      <div><Explore /></div>
      <div><Carousel/></div>
      <div><ProCard /></div>
      <div><Flexplore /></div>
    </>
  )
}
