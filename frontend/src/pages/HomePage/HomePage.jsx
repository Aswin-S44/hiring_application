import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import TrustedBy from "../../sections/TrustedBy/TrustedBy";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";
import CTA from "../../sections/CTA/CTA";
import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../sections/AboutUs/AboutUs";

function HomePage() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <TrustedBy />
      <WhyChoose />
      <CTA />
    </div>
  );
}

export default HomePage;
