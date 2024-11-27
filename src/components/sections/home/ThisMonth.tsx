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
      className="flex flex-col gap-10 border-b border-dashed border-locavore-black px-4 py-10"
    >
      <div className="relative">
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
        <p className="absolute left-[1%] top-[72%] whitespace-pre-wrap font-fakeReceipt text-[0.75rem] leading-[1.32]">{`FLIP\nOVER\nFOR\nMORE!`}</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-mobile-h1 text-center">
          This Month: Local Grill Gear, Our Favorite Sunscreen
        </h1>
        <Button onClick={handleDownload}>Download the Circular</Button>
      </div>
    </section>
  );
};

export default ThisMonth;
