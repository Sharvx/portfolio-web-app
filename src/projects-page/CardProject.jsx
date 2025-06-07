import FRAME from "./frame.png";

function CardProject() {
  const Card = [
    {
      ProjectName: "Project Name #1",
      Image: FRAME,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, at Saepe voluptas ratione modi, aliquam quos vitae nulla.",
    },
    {
      ProjectName: "Project Name #2",
      Image: FRAME,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, at Saepe voluptas ratione modi, aliquam quos vitae nulla.",
    },
    {
      ProjectName: "Project Name #3",
      Image: FRAME,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, at Saepe voluptas ratione modi, aliquam quos vitae nulla.",
    },
    {
      ProjectName: "Project Name #4",
      Image: FRAME,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, at Saepe voluptas ratione modi, aliquam quos vitae nulla.",
    },
    {
      ProjectName: "Project Name #5",
      Image: FRAME,
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, at Saepe voluptas ratione modi, aliquam quos vitae nulla.",
    },
  ];

  const cardList = Card.map((card, index) => (
    <div
      id={"card-" + index}
      className="bg-sheer flex-row-y-center h-[50dvh] min-w-[100%] snap-center justify-around "
    >
      <img src={card.Image} alt="" className="h-[30dvh] w-[30%] rounded-md" />
      <div className="flex h-[30dvh] w-[50%] flex-col justify-around">
        <div className="large-text text-caramel font-bold ">
          {card.ProjectName}
        </div>
        <div className="medium-text text-choco">{card.Description}</div>
      </div>
    </div>
  ));

  return <>{cardList}</>;
}

export default CardProject;
