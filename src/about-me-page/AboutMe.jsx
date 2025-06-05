import LandingPage from "./LandingPage.jsx";
import MyJourney from "./MyJourney.jsx";
import MySkills from "./MySkills/MySkills.jsx";

function AboutMePage() {
  return (
    <>
      <div id="about-me-background" className="bg-sheer px-10 md:px-15 lg:px-30 drop-shadow-yellow drop-shadow-xl">
        <LandingPage />
        <div className="h-0.5 w-full bg-caramel my-[16dvh]"></div>
        <MyJourney />
        <div className="h-0.5 w-full bg-caramel my-[16dvh]"></div>
        <MySkills />
      </div>
    </>
  );
}

export default AboutMePage;
