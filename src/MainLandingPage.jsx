import DP from "./assets/dp.png";

function LandingPage() {
  return (
    <>
      <div
        id="landing-page"
        className="bg-cream flex-column-center pt-[5dvh] h-[95dvh] w-full flex-col"
      >
        <div
          id="backgorund"
          className="flex-row-center w-full md:m-10 md:w-fit md:rounded-4xl"
        >
          <div
            id="info-container"
            className="bg-sheer md:bg-cream text-choco flex-column-x-center m-10 h-auto w-full justify-around rounded-3xl p-8 text-center md:m-0 md:w-[60%] md:items-start md:p-5 md:pr-20 md:text-start lg:pr-23 xl:px-20 xl:pr-50"
          >
            <div className="text-choco medium-text">Hello!</div>
            <div className="text-caramel xl-text my-1 font-bold lg:my-2 2xl:my-4">
              I’m John Sharvey
            </div>
            <div className="text-choco medium-text font-bold">
              Web & Android Developer
            </div>
            <div className="small-text mb-3 2xl:mt-3 2xl:mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <a href="#projects-page" className="text-cream bg-choco small-text hidden w-fit rounded-full p-2 md:block xl:px-3 hover:bg-caramel cursor-pointer transition-all ease-in-out">
              VIEW MY PROJECTS
            </a>
          </div>
          <div className="hidden w-[40%] flex-row items-start justify-end md:mr-5 md:flex xl:mr-20">
            <img
              src={DP}
              alt=""
              className="mb-10 size-70 drop-shadow-sm lg:size-90 xl:mb-20 xl:size-110 2xl:size-130"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
