
import SingleProject from '@/components/single-project'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Project Details',
  description:
    'Detailed view of a project by Hasitha Priyadarshana — featuring web development, networking, IoT, and cybersecurity work.',
  openGraph: {
    title: 'Project Details | Hasitha Priyadarshana',
    description:
      'Detailed view of a project by Hasitha Priyadarshana.',
    url: 'https://hasithapriyadarshana.com/single-project',
  },
}

export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  )
}
