"use client";

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <a
      type="button"
      id="explore-btn"
      className="mt-7 mx-auto"
      onClick={() => console.log("clicked")}
      href="#events"
    >
      Explore
      <Image
        src="/icons/arrow-down.svg"
        className="ml-4"
        width={24}
        height={24}
        alt="arrow-down"
      ></Image>
    </a>
  );
};

export default ExploreBtn;
