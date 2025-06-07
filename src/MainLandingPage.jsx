import DP from "./assets/dp.png";

function LandingPage() {
  return (
    <>
      <div
        id="landing-page"
        className="bg-cream flex-column-center h-[95dvh] w-full flex-col pt-[5dvh]"
      >
        <div
          id="backgorund"
          className="flex-row-center w-full md:m-10 md:w-fit md:rounded-4xl"
        >
          <div
            id="info-container"
            className="bg-sheer drop-shadow-amber-200 drop-shadow-lg md:drop-shadow-none md:bg-cream text-choco flex-column-x-center m-10 h-auto w-full justify-around rounded-3xl p-8 text-center md:m-0 md:w-[60%] md:items-start md:p-5 md:pr-20 md:text-start lg:pr-23 xl:px-20 xl:pr-50"
          >
            <div className="text-choco medium-text">Hello!</div>
            <div className="text-caramel xl-text my-1 font-bold lg:my-2 2xl:my-4 drop-shadow-amber-200 drop-shadow-lg">
              I’m John Sharvey
            </div>
            <div className="text-choco medium-text font-bold">
              Web & Android Developer
            </div>
            <div className="small-text mb-3 2xl:mt-3 2xl:mb-5">
              I love programming, even though it can be challenging at times. The process of solving problems and building things from scratch keeps me motivated and curious. I'm constantly learning new concepts and improving my skills as I grow as a developer.
            </div>
            <a
              href="#projects-page"
              className="text-cream bg-choco small-text hover:bg-caramel hidden w-fit cursor-pointer rounded-full p-2 transition-all ease-in-out md:block xl:px-3 drop-shadow-amber-200 drop-shadow-md"
            >
              VIEW MY PROJECTS
            </a>
          </div>
          <div className="hidden w-[40%] flex-row items-start justify-end md:mr-5 md:flex xl:mr-20 drop-shadow-amber-200 drop-shadow-md">
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
