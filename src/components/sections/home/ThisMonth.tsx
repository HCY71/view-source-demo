"use client";

interface ThisMonthProps {
  // Add props here
}
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";

const ThisMonth: React.FC<ThisMonthProps> = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleDownload = () => {
    console.log("Download the Circular");
  };
  return (
    <section
      id="this-month"
      className="border-b border-dashed border-locavore-black px-4 py-10 md:py-[60px] xl:px-[30px]"
    >
      <div className="3xl:container-max-w flex flex-col gap-10 md:gap-20 xl:flex-row-reverse xl:items-center">
        <div className="relative md:mx-auto md:w-[75%] xl:w-[48%]">
          <div
            className={`ani-flip-card mx-auto my-5 w-[76%] rotate-[-7.3deg] ${isFlipped ? "ani-flipped" : ""}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onTouchStart={() => setIsFlipped((prev) => !prev)}
          >
            <Image
              src="/images/home/this-month/menu.png"
              alt="menu"
              width={500}
              height={771}
              priority
            />
            {/* Put another card here */}
            {/* <Image
            src="/images/home/this-month/menu_back.png"
            alt="menu_back"
            width={500}
            height={771}
            className="mx-auto w-[90%]"
          /> */}
          </div>
          <Image
            src="/images/home/this-month/duck.png"
            alt="menu"
            width={79}
            height={146}
            className="absolute left-[8%] top-[52%] mx-auto w-[12%]"
          />
          <p className="absolute left-[1%] top-[72%] whitespace-pre-wrap font-fakeReceipt text-[0.75rem] leading-[1.32] xl:left-[-2%] xl:top-[60%]">{`FLIP\nOVER\nFOR\nMORE!`}</p>
        </div>
        <div className="flex flex-col items-center gap-8 md:mx-auto md:max-w-[70%] xl:w-[70%] xl:items-start">
          <h1 className="text-mobile-h1 xl:text-desktop-h2 text-center xl:max-w-[670px] xl:text-left">
            This Month: Local Grill Gear, Our Favorite Sunscreen
          </h1>
          <Button onClick={handleDownload}>Download the Circular</Button>
        </div>
      </div>
    </section>
  );
};

export default ThisMonth;
