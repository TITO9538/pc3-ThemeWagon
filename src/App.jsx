import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Details from "./pages/Details";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import { Background } from "./components/Background";

export default function App() {
  return (
    <>
      <Background/>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/details" element={<Details></Details>} />
        <Route path="/features" element={<Features></Features>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/team" element={<Team></Team>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
