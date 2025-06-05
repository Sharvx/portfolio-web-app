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
  <div className="bg-cream flex-column-center h-[30dvh] max-w-[35%] min-w-[35%] grow gap-[4dvh] rounded-xl p-5 xl:max-w-[30%] xl:min-w-[30%]">
    <img src={card.ImageSRC} alt="" className="h-[10dvh]" />
    <div className="medium-text text-choco font-bold">{card.Label}</div>
  </div>
));

function CardSkill() {
  return <>{cardList}</>;
}

export default CardSkill;
