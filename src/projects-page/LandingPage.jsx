import React, { useState, useEffect } from "react";
import CardProject from "./CardProject";
import NEXT from "./next-prev.png";

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxLenght = 5;
  let slider;
  let circleActive;

  const circles = () => {
    const circleArray = [];
    for (let i = 0; i < maxLenght; i++) {
      circleArray.push(
        <div className="medium-text bg-choco flex-column-center size-[2dvh] rounded-full">
          <div
            id={"circle-" + i}
            className="medium-text size-[1dvh] rounded-full"
          ></div>
        </div>
      );
    }
    return circleArray;
  };

  function start() {
    try {
      slider = document.getElementById("projects-card-container");
      slider.scrollLeft = slider.offsetWidth * currentIndex;

      circleActive = document.getElementById("circle-" + currentIndex);

      circleActive.style.backgroundColor = "#f2f6d0";
    } catch (err) {
      console.log(err);
    }
  }

  const nextHandler = () => {
    if (currentIndex < maxLenght - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxLenght - 1);
    }
  };

  useEffect(() => {
    const slider = document.getElementById("projects-card-container");
    const circleActive = document.getElementById("circle-" + currentIndex);

    if (slider && circleActive) {
      slider.scrollLeft = slider.offsetWidth * currentIndex;

      for (let i = 0; i < maxLenght; i++) {
        const circle = document.getElementById("circle-" + i);
        if (circle) {
          circle.style.backgroundColor = i === currentIndex ? "#f2f6d0" : "";
        }
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < maxLenght - 1) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [maxLenght]);

  return (
    <>
      <div id="projects-page" className="h-[16dvh]"></div>
      <div
        className="flex-column-x-center h-fit w-full px-10 md:px-15 lg:px-30 gap-8"
        onLoad={start}
      >
        <div className="xl-text text-choco font-bold">PROJECTS</div>
        <div
          id="projects-card-container"
          className="flex-row-y-center h-fit  w-full md:w-[70%] snap-x snap-mandatory flex-nowrap overflow-hidden scroll-smooth rounded-4xl"
        >
          <CardProject />
        </div>

        <div className="flex-row-y-center w-fit md:w-[30%] justify-between gap-1">
          <div
            className="small-text text-cream bg-choco flex-row-center h-[6dvh] w-[100%] max-w-[50px] min-w-[30px] cursor-pointer rounded-full p-1 transition-all ease-in-out hover:scale-[1.1]"
            onClick={prevHandler}
          >
            <img src={NEXT} alt="" className="size-[3dvh] rotate-180" />
          </div>
          <div className="flex-row-center gap-1 md:gap-[2dvh]">{circles()}</div>
          <div
            className="small-text text-cream bg-choco flex-row-center h-[6dvh] w-[100%] max-w-[50px] min-w-[30px] cursor-pointer rounded-full p-1 transition-all ease-in-out hover:scale-[1.1]"
            onClick={nextHandler}
          >
            <img src={NEXT} alt="" className="size-[3dvh]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
