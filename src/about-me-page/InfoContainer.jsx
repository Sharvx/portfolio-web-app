function InfoContainer() {
  const Education = {
    Header: "Education",
    Card: [
      {
        JobName: "School name #1",
        YearRange: "School Level",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
      {
        JobName: "School name #2",
        YearRange: "School Level",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
      {
        JobName: "School name #3",
        YearRange: "School Level",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
    ],
  };

  const Experiences = {
    Header: "Experience",
    Card: [
      {
        JobName: "Job name #1",
        YearRange: "Years Range No.",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
      {
        JobName: "Job name #2",
        YearRange: "Years Range No.",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
      {
        JobName: "Job name #3",
        YearRange: "Years Range No.",
        CompanyName: "Company name",
        SubDetails:
          "Eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniamadipiscing elit.",
      },
    ],
  };

  const educMap = Education.Card.map((educCard) => (
    <div className="bg-cream flex min-h-[20dvh] w-[100%] flex-col p-5 drop-shadow-amber-200 drop-shadow-md">
      <div>
        <div className="flex flex-row justify-between">
          <div className="small-text text-caramel font-bold">
            {educCard.JobName}
          </div>
          <div className="small-text text-choco">{educCard.YearRange}</div>
        </div>
        <div className="small-text text-choco">{educCard.CompanyName}</div>
      </div>
      <div className="flex grow items-center">
        <div className="small-text text-choco">{educCard.SubDetails}</div>
      </div>
    </div>
  ));

  const experMap = Experiences.Card.map((experMap) => (
    <div className="bg-cream flex min-h-[20dvh] w-[100%] flex-col p-5 drop-shadow-amber-200 drop-shadow-md">
      <div>
        <div className="flex flex-row justify-between">
          <div className="small-text text-caramel font-bold">
            {experMap.JobName}
          </div>
          <div className="small-text text-choco">{experMap.YearRange}</div>
        </div>
        <div className="small-text text-choco">{experMap.CompanyName}</div>
      </div>
      <div className="flex grow items-center">
        <div className="small-text text-choco">{experMap.SubDetails}</div>
      </div>{" "}
    </div>
  ));

  return (
    <>
      <div className="flex h-fit w-full flex-col">
        <div className="text-caramel large-text mb-[3dvh] min-w-[50%] font-bold">
          {Education.Header}
        </div>

        <div className="flex flex-col gap-[2dvh]">{educMap}</div>
      </div>
      <div className="flex h-fit w-full flex-col">
        <div className="text-caramel large-text mb-[3dvh] min-w-[50%] font-bold">
          {Experiences.Header}
        </div>

        <div className="flex flex-col gap-[2dvh]">{experMap}</div>
      </div>
    </>
  );
}

export default InfoContainer;
