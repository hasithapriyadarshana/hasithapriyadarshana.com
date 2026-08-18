
import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'

export const metadata: Metadata = {
  title: 'Blog Post',
  description:
    'Read the latest article by Hasitha Priyadarshana on networking, cybersecurity, web development, and technology.',
  openGraph: {
    title: 'Blog Post | Hasitha Priyadarshana',
    description:
      'Read the latest article by Hasitha Priyadarshana.',
    url: 'https://hasithapriyadarshana.com/blog-details',
  },
}

export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}
