import InfoContainer from "./InfoContainer";

function MyJourney() {
  return (
    <>
      <div className="flex-column-x-center h-fit w-full gap-[8dvh]">
        <div className="xl-text text-choco w-full font-bold">MY JOURNEY</div>
        <div className="flex w-full flex-row flex-wrap gap-x-[12dvh] gap-y-[8dvh] md:flex-nowrap">
          <InfoContainer />
        </div>
      </div>
    </>
  );
}

export default MyJourney;
