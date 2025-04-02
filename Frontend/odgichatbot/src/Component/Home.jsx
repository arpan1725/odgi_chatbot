import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./css/Home.css";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    
    const carouselElement = document.getElementById("carouselExampleIndicators");
    
    if (carouselElement) {
      import("bootstrap").then((bootstrap) => {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000, // Auto-slide every 3 seconds for transition
          ride: "carousel",
        });
      });
    }
  }, []);

  const videoId = "mOdRyQEEchE";

  return (
    <div className="min-h-screen bg-white">

      {/* Navigation Bar of the page*/}

      <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold" style={{ color: "lightgreen" }}>
  OmDayal Group of Institutions
</h1>

        

      


        <ul className="flex space-x-6">
          <li><Link to="https://omdayal.com/" className="hover:underline">Home</Link></li>
          <li><Link to="https://omdayal.com/admissions/admission-procedure/" className="hover:underline">Admissions</Link></li>
          <li><Link to="https://omdayal.com/academics/departments/" className="hover:underline">Academics</Link></li>
          <li><Link to="https://omdayal.com/admissions/programme-offered/" className="hover:underline">Courses</Link></li>
          <li><Link to="https://omdayal.com/training-placement/overview/" className="hover:underline">Training & Placements</Link></li>
          <li><Link to="https://omdayal.com/infrastructure/" className="hover:underline">Campus Life</Link></li>
          <li><Link to="https://omdayal.com/blog/" className="hover:underline">Blog</Link></li>
          <li><Link to="https://omdayal.com/contact/" className="hover:underline">Contact</Link></li>
        </ul>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"><Link to= "https://omdayal.com/enquire-now/" classname="hover:underline">Apply Now</Link></button>
      </nav>




      {/* Bootstrap Image Carousel */}



      <section className="relative w-full">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9"></button>
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/IMG/capture1.jpeg" className="d-block w-100 h-[500px] object-cover" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture2.jpg" className="d-block w-100 h-[500px] object-cover" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture3.webp" className="d-block w-100 h-[500px] object-cover" alt="Slide 3" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture4.webp" className="d-block w-100 h-[500px] object-cover" alt="Slide 4" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture5.jpg" className="d-block w-100 h-[500px] object-cover" alt="Slide 5" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture6.jpg" className="d-block w-100 h-[500px] object-cover" alt="Slide 6" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture7.webp" className="d-block w-100 h-[500px] object-cover" alt="Slide 7" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture8.webp" className="d-block w-100 h-[500px] object-cover" alt="Slide 8" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture9.webp" className="d-block w-100 h-[500px] object-cover" alt="Slide 9" />
      </div>
      <div className="carousel-item">
        <img src="/IMG/capture10.jpeg" className="d-block w-100 h-[500px] object-cover" alt="Slide 10" />
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</section>


      {/* About Section */}



      <section className="about-section">
  <h1 className="about-heading">Why Choose Us?</h1>
  <p className="about-text">
    We excel in <span className="highlight">Engineering</span>, 
    <span className="highlight"> Architecture</span>, and <span className="highlight"> Management</span> education, 
    fostering innovation and preparing students for a successful future.
  </p>
  <p className="about-text">
    Our <span className="highlight">Engineering</span> programs equip students with 
    advanced technical skills, problem-solving abilities, and hands-on experience 
    through industry collaborations and state-of-the-art laboratories.
  </p>
  <p className="about-text">
    The <span className="highlight">Architecture</span> curriculum blends creativity with 
    structural expertise, empowering students to design sustainable, functional, 
    and aesthetically pleasing spaces that shape future landscapes.
  </p>
  <p className="about-text">
    Our <span className="highlight">Management</span> courses cultivate leadership, 
    strategic thinking, and business acumen, preparing students to navigate 
    the dynamic corporate world with confidence and innovation.
  </p>
</section>



      {/* Video Section with Clickable Thumbnail */}
        
<div className="container mx-auto p-8 text-center bg-white border-2 border-gray-300 rounded-lg shadow-lg">
  <p className="mt-2 text-lg text-gray-700">
    We focus on <span className="font-semibold text-blue-800">innovative learning methods</span>, 
    <span className="font-semibold text-blue-800"> real-world applications</span>, and 
    <span className="font-semibold text-blue-800"> industry collaboration</span> to shape future leaders.
  </p>

  <div className="video-container mt-6 flex justify-center">
    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video Thumbnail"
        className="w-64 h-36 md:w-80 md:h-48 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
      />
    </a>
  </div>
</div>


      
      <Footer />
    </div>
  );
};

export default Home;
