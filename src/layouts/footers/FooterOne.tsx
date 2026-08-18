
import React from 'react'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <p>Have a project in mind?</p>
                <h2><a href="mailto:hasitha@hyperx.lk">lets work</a></h2>
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
