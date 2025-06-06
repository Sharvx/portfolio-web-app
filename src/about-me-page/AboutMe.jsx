import LandingPage from "./LandingPage.jsx";
import MyJourney from "./MyJourney.jsx";
import MySkills from "./MySkills/MySkills.jsx";

function AboutMePage() {
  return (
    <>
      <div
        id="about-me-background"
        className="bg-sheer drop-shadow-yellow px-10 drop-shadow-xl md:px-15 lg:px-30"
      >
        <LandingPage />
        <div className="bg-caramel my-[16dvh] h-0.5 w-full"></div>
        <MyJourney />
        <div className="bg-caramel my-[16dvh] h-0.5 w-full"></div>
        <MySkills />
      </div>
    </>
  );
}

export default AboutMePage;
