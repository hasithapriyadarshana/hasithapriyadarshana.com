
import React from 'react'

const services_data = [
  {
    id: 1,
    icon: "ri-router-line",
    num: "01",
    title: "Network Solutions",
    desc: "Designing, configuring, and securing reliable network infrastructure for businesses and individuals, including Cisco and cloud-based networking solutions.",
  },
  {
    id: 2,
    icon: "ri-code-s-slash-line",
    num: "02",
    title: "Website Design",
    desc: "Creating modern, responsive, and user-friendly websites that match your brand and business goals using modern web technologies and WordPress.",
  },
  {
    id: 3,
    icon: "ri-tools-line",
    num: "03",
    title: "Website Maintenance",
    desc: "Keeping your website secure, updated, fast, and reliable with regular maintenance, content updates, backups, and technical support.",
  },
  {
    id: 4,
    icon: "ri-arrow-left-right-line",
    num: "04",
    title: "Website Migration",
    desc: "Moving websites safely between hosting providers, domains, or platforms with minimal downtime and proper data, database, and email migration.",
  },
  {
    id: 5,
    icon: "ri-share-line",
    num: "05",
    title: "Social Media Marketing",
    desc: "Helping businesses build their online presence through social media content, campaign management, audience engagement, and digital marketing strategies.",
  },
  {
    id: 6,
    icon: "ri-wordpress-line",
    num: "06",
    title: "WordPress Solutions",
    desc: "Expert WordPress solutions for business websites, Elementor, WooCommerce, custom functionality, performance optimization, security, troubleshooting, and complete website development.",
  },
]

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area no-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>What I Do</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {services_data.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className={item.icon}></i>
                  <h5>{item.num}</h5>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
