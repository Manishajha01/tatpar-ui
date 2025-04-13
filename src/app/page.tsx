"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import BookService from "./components/BookService";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Cta from "./components/Cta";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <BookService />
        <Stats />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Faqs />
        <Cta />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
