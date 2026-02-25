import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Website Design & Development</h4>
                <p>
                  I create modern, responsive, and user-friendly websites that
                  work perfectly on all devices. I specialize in converting
                  designs from Figma to real-world websites, with expertise in
                  MERN stack, Next.js, and WordPress development.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>Website Maintenance</h4>
                <p>
                  I provide regular updates, backups, and performance checks to
                  keep your website secure and running
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Graphic Design</h4>
                <p>
                  I design creative visuals, logos, and marketing materials that
                  match your brand identity.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>Social Media Marketing</h4>
                <p>
                  I help businesses grow their online presence through effective
                  social media strategies and engaging content. I create
                  targeted campaigns, manage pages, and run Facebook boost
                  marketing to reach the right audience, increase engagement,
                  and drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
