"use client"
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'

import portfolio_img_1 from "@/assets/images/projects/work7.png";
import portfolio_img_2 from "@/assets/images/projects/work2.png";
import portfolio_img_3 from "@/assets/images/projects/work3.png";
import portfolio_img_4 from "@/assets/images/projects/work4.png";
import portfolio_img_5 from "@/assets/images/projects/work7.png";
import portfolio_img_6 from "@/assets/images/projects/work6.png";

interface DataType {
  id: number;
  image: StaticImageData;
  title: string;
  desc: string;
  category: string;
  github?: string;
  live?: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    image: portfolio_img_1,
    title: "HasithaPriyadarshana.com",
    desc: "Personal portfolio website built with Next.js, featuring modern design, GSAP animations, and a fully responsive layout.",
    category: "personal",
    github: "https://github.com/hasithapriyadarshana/my-portfolio-next",
    live: "https://hasithapriyadarshana.com",
  },
  {
    id: 2,
    image: portfolio_img_2,
    title: "Lanka Guide",
    desc: "A travel and tourism platform showcasing Sri Lankan destinations, built with responsive design and interactive features.",
    category: "freelance",
    live: "#",
  },
  {
    id: 3,
    image: portfolio_img_3,
    title: "HyperX Innovations",
    desc: "Business website for HyperX Innovations providing web development and technology solutions to clients.",
    category: "personal",
    live: "#",
  },
  {
    id: 4,
    image: portfolio_img_4,
    title: "Smart Weather IoT Device",
    desc: "IoT-based weather monitoring system built with microcontrollers, sensors, and real-time data visualization.",
    category: "university",
    github: "#",
  },
  {
    id: 5,
    image: portfolio_img_5,
    title: "Network Traffic Monitor",
    desc: "Network monitoring tool for analyzing traffic patterns, detecting anomalies, and visualizing bandwidth usage.",
    category: "networking",
    github: "#",
  },
  {
    id: 6,
    image: portfolio_img_6,
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with product management, cart, checkout, and payment integration.",
    category: "freelance",
    live: "#",
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "personal", label: "Personal" },
  { key: "freelance", label: "Freelance" },
  { key: "university", label: "University" },
  { key: "networking", label: "Networking" },
];

export default function PortfolioArea() {

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = activeFilter === "all"
    ? portfolio_data
    : portfolio_data.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container">
          {/* Filter Tabs */}
          <div className="row mb-4">
            <div className="col-xl-12">
              <div className="portfolio-filter">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
                    onClick={() => setActiveFilter(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="row g-4">
            {filteredData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="portfolio-card wow fadeInUp delay-0-2s">
                  <div className="portfolio-card-image">
                    <Image src={item.image} alt={item.title} style={{ height: "auto", width: "100%" }} />
                    <span className="portfolio-card-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                  </div>
                  <div className="portfolio-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="portfolio-card-links">
                      {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
                          <i className="ri-github-line"></i> GitHub
                        </a>
                      )}
                      {item.live && (
                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="portfolio-btn portfolio-btn-primary">
                          <i className="ri-external-link-line"></i> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
