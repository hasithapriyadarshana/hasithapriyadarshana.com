import React from "react";

const services_data = [
  {
    id: 1,
    icon: "ri-code-s-slash-line",
    num: "01",
    title: "Web Development",
    desc: "Building modern, responsive websites and web applications using React, Next.js, PHP, and WordPress. From landing pages to full-stack solutions.",
  },
  {
    id: 2,
    icon: "ri-shield-check-line",
    num: "02",
    title: "Network & Security",
    desc: "Network design, configuration, and security auditing. Setting up secure infrastructure for businesses and individuals using Cisco and cloud technologies.",
  },
  {
    id: 3,
    icon: "ri-cloud-line",
    num: "03",
    title: "Cloud Solutions",
    desc: "Microsoft Azure and AWS cloud deployments, migration, and management. Scalable, reliable cloud infrastructure for modern applications.",
  },
  {
    id: 4,
    icon: "ri-smartphone-line",
    num: "04",
    title: "IoT & Smart Systems",
    desc: "Designing and prototyping IoT devices and embedded systems. Connecting the physical world with smart, networked technology.",
  },
  {
    id: 5,
    icon: "ri-palette-line",
    num: "05",
    title: "UI/UX Design",
    desc: "User-centered interface design, prototyping, and visual identity creation. Figma, Framer, and custom design systems.",
  },
  {
    id: 6,
    icon: "ri-server-line",
    num: "06",
    title: "IT Consulting",
    desc: "Technology strategy, project planning, and technical consulting for startups and small businesses looking to scale with the right tools.",
  },
];

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
  );
}
