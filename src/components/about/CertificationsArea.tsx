import React from "react";

const certifications = [
  {
    id: 1,
    icon: "ri-arrow-right-up-line",
    num: "01",
    image: "assets/images/about/cisco.svg",
    title: "Network Fundamentals Specialization",
    provider: "Cisco",
    year: "2024",
    desc: "Comprehensive networking fundamentals covering TCP/IP, routing, switching, and network infrastructure.",
  },
  {
    id: 2,
    icon: "ri-arrow-right-up-line",
    num: "02",
    image: "assets/images/about/google.svg",
    title: "IT Support Professional Certificate",
    provider: "Google",
    year: "2023",
    desc: "Google IT Support Professional Certificate covering troubleshooting, networking, security, and system administration.",
  },
  {
    id: 3,
    icon: "ri-arrow-right-up-line",
    num: "03",
    image: "assets/images/about/cisco.svg",
    title: "Introduction to Cybersecurity",
    provider: "Cisco",
    year: "2024",
    desc: "Cybersecurity concepts, threat landscape, security protocols, and defensive techniques.",
  },
  {
    id: 4,
    icon: "ri-arrow-right-up-line",
    num: "04",
    image: "assets/images/about/microsoft.svg",
    title: "Azure Fundamentals",
    provider: "Microsoft",
    year: "2024",
    desc: "Microsoft Azure cloud services, core solutions, management tools, and governance features.",
  },
  {
    id: 5,
    icon: "ri-arrow-right-up-line",
    num: "05",
    image: "assets/images/about/meta.svg",
    title: "Front-End Developer Certificate",
    provider: "Meta",
    year: "2023",
    desc: "Modern front-end development with React, responsive design, UI/UX principles, and version control.",
  },
  {
    id: 6,
    icon: "ri-arrow-right-up-line",
    num: "06",
    image: "assets/images/about/docker.svg",
    title: "Docker Basics for DevOps",
    provider: "Docker",
    year: "2024",
    desc: "Docker fundamentals, containers, images, networking, and practical container-based development.",
  },
];

export default function CertificationsArea() {
  return (
    <>
      <section id="certifications" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Licenses &amp; Certifications</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {certifications.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <div className="cert-logo">
                    <img src={item.image} alt={item.provider} />
                  </div>
                  <i className={item.icon}></i>
                  <h5>{item.num}</h5>
                  <h4>{item.title}</h4>
                  <p>
                    <strong>{item.provider}</strong> &middot; {item.year}
                    <br />
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
