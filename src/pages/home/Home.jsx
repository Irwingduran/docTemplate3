import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ListItems from "./ListItems";
import About from "./About";
import Services from "./Services";
import ServiceCards from "./ServiceCards";
import BookAnAppointment from "./BookAnAppointment";
import LocationMap from "./LocationMap";
import DoctorReviews from "./DoctorReviews";
import Footer from "./Footer";
import DoctorArticles from "./DoctorArticles";
import AdditionalServices from "./AdditionalServices";
import WhatsAppButton from "./WhatsAppButton";


function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Contenedor principal con margen */}
        <div className="container mx-auto px-4 py-6">
          <WhatsAppButton/>
          {/* Secciones con fondo claro */}
          <Hero />
          <ListItems />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Sección de información */}
        <About />
      </div>

      <div className="bg-white min-h-screen">
        {/* Secciones de servicios con fondo */}
        <div className="container mx-auto px-4 py-6">
         
          <Services />
        

        </div>
      </div>

      <div className=" min-h-screen">
        {/* Secciones de servicios sin fondo */}
        <div className="container mx-auto px-4 py-6">
          <ServiceCards />
        </div>
      </div>

      <div className="bg-white container mx-auto px-4 py-6">
        {/* Mapas, citas y más contenido */}
        <AdditionalServices/>
        <BookAnAppointment />
        <DoctorArticles />
        <LocationMap />
        <DoctorReviews />
        
      </div>

      <Footer />
    </>
  );
}

export default Home;