"use client"
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup';

import portfolio_img_1 from "@/assets/images/projects/work7.png";
import portfolio_img_2 from "@/assets/images/projects/work2.png";
import portfolio_img_3 from "@/assets/images/projects/work3.png";
import portfolio_img_4 from "@/assets/images/projects/work4.png";
import portfolio_img_5 from "@/assets/images/projects/work7.png";
import portfolio_img_6 from "@/assets/images/projects/work6.png";

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
  year: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "4",
    image: portfolio_img_1,
    title: "HasithaPriyadarshana.com",
    category: "personal",
    year: "2024",
  },
  {
    id: 2,
    col: "4",
    image: portfolio_img_2,
    title: "Lanka Guide",
    category: "freelance",
    year: "2024",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "HyperX Innovations",
    category: "personal",
    year: "2024",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Smart Weather IoT Device",
    category: "university",
    year: "2024",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Network Traffic Monitor",
    category: "networking",
    year: "2024",
  },
  {
    id: 6,
    col: "4",
    image: portfolio_img_6,
    title: "E-Commerce Platform",
    category: "freelance",
    year: "2023",
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
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = activeFilter === "all"
    ? portfolio_data
    : portfolio_data.filter((item) => item.category === activeFilter);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const image = filteredData.map((item) => item.image.src);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
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
          <div className="row g-4 portfolio-grid">
            {filteredData.map((item, i) => (
              <div key={`${item.id}-${i}`} className={`col-md-6 col-xl-${item.col} portfolio-item`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="portfolio-box">
                    <Image src={item.image} alt={item.title} style={{ height: "auto" }} data-rjs="2" />
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                      <span className="portfolio-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)} &middot; {item.year}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  )
}
