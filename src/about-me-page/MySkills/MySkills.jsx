import CardSkills from "./CardSkills";

function MySkills() {
  return (
    <>
      <div className="bg-sheer flex h-fit w-full flex-col gap-[8dvh] ">
        <div className="xl-text text-choco w-full font-bold">MY SKILLS</div>
        <div className="flex-row-x-center h-fit w-full flex-wrap gap-[4dvh] mb-[16dvh]">
          <CardSkills />
        </div>
      </div>
    </>
  );
}

export default MySkills;
