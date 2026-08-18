
import Service from '@/components/service'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Services offered by Hasitha Priyadarshana — web development, network engineering, cybersecurity, cloud solutions, IoT, UI/UX design, and IT consulting.',
  openGraph: {
    title: 'Services | Hasitha Priyadarshana',
    description:
      'Web development, networking, cybersecurity, cloud, IoT, and IT consulting services.',
    url: 'https://hasithapriyadarshana.com/service',
  },
}

export default function index() {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  )
}
