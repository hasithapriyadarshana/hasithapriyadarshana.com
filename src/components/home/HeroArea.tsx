"use client"
import React from 'react'
import { Particles } from "@/components/ui/particles"

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area" style={{ position: 'relative' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Particles
            className="absolute inset-0"
            quantity={80}
            color="#c9a84c"
            vx={0.1}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Hasitha Priyadarshana</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/03.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">50+ reviews <span>(4.9 of 5)</span>
                    <p>Five-star reviews from my esteemed clients worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/me.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <h5>Network Technology &middot; Cybersecurity &middot; Web Development</h5>
                <p style={{ marginTop: "10px" }}>
                  Network Technology Undergraduate &amp; Web Developer. Building secure
                  network solutions, modern web experiences, and practical technology
                  solutions. Available for freelance projects, internships, and
                  technology collaborations.
                </p>
                <a className="theme-btn" href="/contact">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
