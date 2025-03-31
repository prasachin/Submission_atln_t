import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "Home", description: "Welcome back to InjectSql", link: "/" },
    {
      title: "SQL Editor",
      description: "Write and execute your queries in Editor!",
      link: "/editor",
    },
    {
      title: "About Us",
      description: "Learn more about our mission.",
      link: "https://ask.atlan.com/hc/en-us/articles/4414501915025-Customer-support",
    },
    {
      title: "Visit GitHub",
      description: "Suggest your opinion and Learn together.",
      link: "https://github.com/prasachin",
    },
  ];

  const handleSlideChange = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % slides.length
        : (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => handleSlideChange("next"), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-background">
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <Link to={slide.link}>
                <button className="button">Go to {slide.title}</button>
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-button left"
          onClick={() => handleSlideChange("prev")}
        >
          ◀
        </button>
        <button
          className="carousel-button right"
          onClick={() => handleSlideChange("next")}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Home;
