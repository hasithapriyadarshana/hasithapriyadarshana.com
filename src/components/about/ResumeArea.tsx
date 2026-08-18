import React from "react";

const work_data = [
  {
    id: 1,
    image: "assets/images/about/hyperx.svg",
    date: "2023 - Present",
    title: "Founder & CEO",
    company: "HyperX Innovations",
    desc: "Founded HyperX Innovations to provide web development and technology solutions to businesses and individuals. Responsible for project planning, development, client communication, technical implementation, and business operations.",
  },
  {
    id: 2,
    image: "assets/images/about/fiverr.svg",
    date: "2023 - Present",
    title: "Level 1 Freelancer",
    company: "Fiverr",
    desc: "Provide website design and development services to clients through Fiverr. Work on business websites, WordPress projects, landing pages, UI improvements, and other web-related solutions.",
  },
  {
    id: 3,
    image: "assets/images/about/freelance.svg",
    date: "2018 - 2022",
    title: "Freelance Graphic Designer",
    company: "Independent",
    desc: "Started my professional journey by providing graphic design services for individuals and businesses. Worked on visual identities, logos, promotional materials, and digital content.",
  },
];

const education_data = [
  {
    id: 1,
    image: "assets/images/about/usjp.svg",
    date: "2024 - 2028",
    title: "Bachelor of ICT (Hons) — Network Technology",
    company: "University of Sri Jayewardenepura",
    desc: "Pursuing a four-year Bachelor of ICT (Honours) degree with a focus on networking, cybersecurity, cloud computing, software development, databases, and emerging technologies.",
  },
  {
    id: 2,
    image: "assets/images/about/ananda.svg",
    date: "2014 - 2023",
    title: "Secondary & Advanced Level Education",
    company: "Ananda Sastralaya National School",
    desc: "Completed secondary and Advanced Level education in the Technology Stream, developing a strong foundation in technology and information communication.",
  },
  {
    id: 3,
    image: "assets/images/about/weediyabandara.svg",
    date: "2009 - 2013",
    title: "Primary Education",
    company: "Weediyabandara M.V., Morapitiya",
    desc: "Completed primary education and successfully passed the Grade 5 Scholarship Examination.",
  },
];

const volunteer_data = [
  {
    id: 1,
    image: "assets/images/about/cryptx.svg",
    date: "2025 - Present",
    title: "Co-Chair",
    company: "CryptX 2.0",
    desc: "Contributing to the planning and coordination of a university-level cybersecurity event featuring technical competitions, CTF challenges, knowledge-sharing sessions, and industry-focused activities.",
  },
  {
    id: 2,
    image: "assets/images/about/csnds.svg",
    date: "2026 - Present",
    title: "Vice President",
    company: "Career Skills Development Society",
    desc: "Supporting professional development initiatives for university students through workshops, career programmes, industry engagement, and networking opportunities.",
  },
  {
    id: 3,
    image: "assets/images/about/ictsoc.svg",
    date: "2024 - Present",
    title: "Member",
    company: "ICT Society — University of Sri Jayewardenepura",
    desc: "Participating in technical events, workshops, hackathons, competitions, and technology awareness programmes.",
  },
  {
    id: 4,
    image: "assets/images/about/touchpeak.svg",
    date: "2025",
    title: "Participant",
    company: "Touch The Peak",
    desc: "Participated in a university leadership and personal development programme focused on professional growth, teamwork, and leadership skills.",
  },
];

export default function ResumeArea() {
  return (
    <>
      <div className="resume-area no-padding" id="resume">
        <div className="container">
          <div className="row">
            {/* Work Experience */}
            <div className="col-xl-6 col-md-6">
              <div className="timeline-section wow fadeInUp delay-0-2s">
                <h3 className="timeline-title">
                  <i className="fas fa-briefcase"></i>
                  Work Experience
                </h3>
                <div className="timeline">
                  {work_data.map((item) => (
                    <div key={item.id} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-item-inner">
                        <div className="timeline-logo">
                          <img src={item.image} alt={item.company} />
                        </div>
                        <div className="timeline-content">
                          <span className="resume-date">{item.date}</span>
                          <h2>{item.title}</h2>
                          <span className="timeline-company">{item.company}</span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="col-xl-6 col-md-6">
              <div className="timeline-section wow fadeInUp delay-0-4s">
                <h3 className="timeline-title">
                  <i className="fas fa-graduation-cap"></i>
                  Education
                </h3>
                <div className="timeline">
                  {education_data.map((item) => (
                    <div key={item.id} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-item-inner">
                        <div className="timeline-logo">
                          <img src={item.image} alt={item.company} />
                        </div>
                        <div className="timeline-content">
                          <span className="resume-date">{item.date}</span>
                          <h2>{item.title}</h2>
                          <span className="timeline-company">{item.company}</span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Volunteering Experience */}
          <div className="row">
            <div className="col-xl-12">
              <div className="timeline-section wow fadeInUp delay-0-2s" style={{ paddingTop: "60px" }}>
                <h3 className="timeline-title">
                  <i className="fas fa-hands-helping"></i>
                  Volunteering Experience
                </h3>
                <p className="timeline-subtitle">
                  Active leadership, technical management, and community initiative
                  positions I&apos;ve held across societies and tech organizations.
                </p>
                <div className="timeline timeline-full">
                  {volunteer_data.map((item) => (
                    <div key={item.id} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-item-inner">
                        <div className="timeline-logo">
                          <img src={item.image} alt={item.company} />
                        </div>
                        <div className="timeline-content">
                          <span className="resume-date">{item.date}</span>
                          <h2>{item.title}</h2>
                          <span className="timeline-company">{item.company}</span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
