import HTML from "./html.png";
import CSS from "./css.png";
import REACT from "./react.png";
import JAVA from "./java.png";
import JS from "./js.png";
import TAILWIND from "./tailwind.png";

const SkillCards = [
  {
    ImageSRC: REACT,
    Label: "REACT",
  },
  {
    ImageSRC: TAILWIND,
    Label: "TAILWIND",
  },
  {
    ImageSRC: HTML,
    Label: "HTML",
  },
  {
    ImageSRC: CSS,
    Label: "JAVA",
  },
  {
    ImageSRC: JS,
    Label: "JAVASCRIPT",
  },
  {
    ImageSRC: JAVA,
    Label: "JAVA",
  },
];

const cardList = SkillCards.map((card) => (
  <div className="bg-cream flex-column-center max-w-[40%] min-w-[40%]  h-[25dvh] md:h-[30dvh] md:max-w-[35%] md:min-w-[35%] grow gap-[4dvh] rounded-xl p-5 xl:max-w-[30%] xl:min-w-[30%] drop-shadow-amber-200 drop-shadow-md">
    <img src={card.ImageSRC} alt="" className="h-[10dvh]" />
    <div className="medium-text text-choco font-bold">{card.Label}</div>
  </div>
));

function CardSkill() {
  return <>{cardList}</>;
}

export default CardSkill;
