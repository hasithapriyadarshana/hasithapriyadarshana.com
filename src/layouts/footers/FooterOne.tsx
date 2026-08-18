"use client"
import React, { useEffect, useState } from 'react'

const texts = ["lets work", "lets build", "lets create", "lets connect"]

export default function FooterOne() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 100)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 60)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((textIndex + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p>Have a project in mind?</p>
                <h2>
                  <a href="mailto:chathasitha@gmail.com">
                    {texts[textIndex].substring(0, charIndex)}
                    <span className="typing-cursor">|</span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">Hasitha Priyadarshana &middot; Network Technology Undergraduate &middot; Web Developer</p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text">&copy; {new Date().getFullYear()} HyperX Innovations. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
