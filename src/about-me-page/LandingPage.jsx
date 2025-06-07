import dp from "./dp-about-me.png";

function LandingPage() {
  return (
    <>
      <div id="about-me-page" className="h-[5dvh] w-full"></div>
      <div className="flex-column-x-center min-h-fit w-full">
        <div className="text-choco xl-text mt-[10dvh] font-bold">ABOUT ME</div>
        <img
          src={dp}
          alt=""
          className="2xl:size:125 size-70 md:size-80 lg:size-90 xl:size-120 drop-shadow-amber-200 drop-shadow-md"
        />
        <div className="text-caramel large-text my-3 font-bold">
          Web & Android Developer
        </div>
        <div className="text-choco small-text text-center">
          <span className="font-bold">Lorem ipsum dolor sit amet,</span>{" "}
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </>
  );
}

export default LandingPage;
