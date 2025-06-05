import AwardCard from "./AwardCard";

function LandingPage() {
  return (
    <div className="px-10 md:px-15 lg:px-30">
      <div className="h-[16dvh]"></div>
      <div id="awards-page" className="bg-sheer mb-[16dvh] h-0.5 w-full"></div>
      <div className="h-fit mb-[5dvh]">
        <div className="xl-text text-choco mb-8 font-bold">AWARDS</div>
        <div className="flex-row-y-center h-fit w-full flex-wrap justify-evenly gap-[2dvh] p-5">
          <AwardCard />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
