import FB from "./assets/fb.png";
import EMAIL from "./assets/email.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const ButtonData = [
    {
      ButtonName: "ABOUT ME",
      Link: "#about-me-page",
    },
    {
      ButtonName: "PROJECTS",
      Link: "#projects-page",
    },
    {
      ButtonName: "AWARDS",
      Link: "#awards-page",
    },
  ];
  const ButtonList = ButtonData.map((button, index) => (
    <a
      key={index}
      href={button.Link}
      className="text-choco large-text md:medium-text lg:small-text hover:text-caramel m-5 hidden transition-all ease-in-out sm:block"
    >
      {button.ButtonName}
    </a>
  ));

  return (
    <>
      <div
        id="header-body"
        className="bg-cream flex-row-y-center shadow-cream fixed top-0 z-100 h-[10dvh] min-h-fit w-full px-10 shadow-md md:px-15 xl:px-30"
      >
        <div className="grow-1 transition-all ease-in-out">
          <a
            href="#landing-page"
            className="text-choco large-text md:medium-text lg:small-text hover:text-caramel font-bold transition-all ease-in-out"
          >
            PORTFOLIO.
          </a>
        </div>
        {ButtonList}
        <div className="bg-choco hidden h-5 w-0.5 rounded-full sm:block md:ml-5 md:w-0.75 lg:h-6 2xl:h-8"></div>
        <a
          href="https://www.facebook.com/J.S.Gupo"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-5 md:ml-10 lg:ml-13"
        >
          <FontAwesomeIcon
            className="xl-text lg:medium-text text-choco hover:text-caramel cursor-pointer transition-all ease-in-out"
            icon={faSquareFacebook}
          />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&to=johnsharveygupo@gmail .com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 md:ml-6 lg:ml-8"
        >
          <FontAwesomeIcon
            className="xl-text lg:medium-text text-choco hover:text-caramel cursor-pointer transition-all ease-in-out"
            icon={faSquareEnvelope}
          />
        </a>
      </div>
    </>
  );
}
export default Header;
