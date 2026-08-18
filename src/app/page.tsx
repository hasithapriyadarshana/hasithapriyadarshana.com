
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Hasitha Priyadarshana — Network Technology undergraduate and web developer. Explore my projects, services, and get in touch for web development, networking, and cybersecurity work.',
  openGraph: {
    title: 'Hasitha Priyadarshana | Home',
    description:
      'Network Technology undergraduate and web developer. Explore my projects, skills, and experience.',
    url: 'https://hasithapriyadarshana.com',
  },
}

export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
