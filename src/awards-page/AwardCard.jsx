import frame1 from "../awards-page/frame.png";
import frame2 from "../awards-page/frame.png";
import frame3 from "../awards-page/frame.png";
import frame4 from "../awards-page/frame.png";
import frame5 from "../awards-page/frame.png";
import frame6 from "../awards-page/frame.png";

function AwardCard() {
  const AwardData = [
    {
      Title: "Award Title #1",
      Event: "Event # 1",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame1,
      From: "(AWARD FROM) Name #1",
    },
    {
      Title: "Award Title #2",
      Event: "Event #2",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame2,
      From: "(AWARD FROM) Name #2",
    },
    {
      Title: "Award Title #3",
      Event: "Event #3",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame3,
      From: "(AWARD FROM) Name #3",
    },
    {
      Title: "Award Title #4",
      Event: "Event #4",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame4,
      From: "(AWARD FROM) Name #4",
    },
    {
      Title: "Award Title #5",
      Event: "Event # 5",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame5,
      From: "(AWARD FROM) Name #5",
    },
    {
      Title: "Award Title #6",
      Event: "Event #6",
      Details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ratione modi, aliquam quos vitae nulla.",
      CompanyProfile: frame6,
      From: "(AWARD FROM) Name #6",
    },
  ];

  const AwardList = AwardData.map((award) => (
    <div className="bg-sheer min-w-[250px] max-w-[30%] h-fit w-[100%] grow p-5">
      <div className="medium-text text-caramel font-bold mb-1">{award.Title}</div>
      <div className="small-text text-choco font-bold">{award.Event}</div>
      <div className="small-text text-choco my-8">{award.Details}</div>
      <div className="flex-row-y-center gap-3">
        <div className="size-12">
          <img className="rounded-full" src={award.CompanyProfile} alt="" />
        </div>
        <div className="small-text font-bold text-choco">{award.From}</div>
      </div>
    </div>
  ));

  return <>{AwardList}</>;
}

export default AwardCard;
