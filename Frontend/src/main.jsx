import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import "./index.css";
import Hero from "./Pages/Hero.jsx";
import Section from "./Pages/Section.jsx";
import Section2 from "./Pages/Section2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Hero />
    <Section />
    <Section2 />
    <App />
  </StrictMode>
);
