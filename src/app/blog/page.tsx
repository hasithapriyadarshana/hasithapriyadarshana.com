import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles and insights on networking, cybersecurity, web development, and technology by Hasitha Priyadarshana.',
  openGraph: {
    title: 'Blog | Hasitha Priyadarshana',
    description:
      'Articles and insights on networking, cybersecurity, web development, and technology.',
    url: 'https://hasithapriyadarshana.com/blog',
  },
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}
