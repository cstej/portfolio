import React from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import FooterSection from "./components/FooterSection";
const App = () => {
  return (
    <div id="default">
      <Navbar />
      <IntroSection />
      <SkillsSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};

export default App;
