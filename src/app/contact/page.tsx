
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Hasitha Priyadarshana for web development, networking, cybersecurity, and cloud computing projects. Available for freelance work, internships, and collaborations.',
  openGraph: {
    title: 'Contact | Hasitha Priyadarshana',
    description:
      'Get in touch with Hasitha Priyadarshana for web development, networking, and cybersecurity projects.',
    url: 'https://hasithapriyadarshana.com/contact',
  },
}

export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
