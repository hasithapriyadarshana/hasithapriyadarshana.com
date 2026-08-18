
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Hasitha Priyadarshana — Bachelor of ICT (Hons) student at the University of Sri Jayewardenepura, specializing in Network Technology. Founder of HyperX Innovations with experience in web development, networking, cybersecurity, and cloud computing.',
  openGraph: {
    title: 'About | Hasitha Priyadarshana',
    description:
      'Learn about Hasitha Priyadarshana — Network Technology undergraduate, web developer, and founder of HyperX Innovations.',
    url: 'https://hasithapriyadarshana.com/about',
  },
}

export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
