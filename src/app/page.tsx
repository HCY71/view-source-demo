import Image from "next/image";

import SubNav from "@/components/organisms/forms/SubNav";
// Sections:
import Welcome from "@/components/sections/home/Welcome";
import About from "@/components/sections/home/About";
import ThisMonth from "@/components/sections/home/ThisMonth";
import OurBrand from "@/components/sections/home/OurBrand";
import Submit from "@/components/sections/home/Submit";

export default function Home() {
  return (
    <main>
      <SubNav />
      {/* TODO: Add Sections */}
      <Welcome />
      <About />
      <ThisMonth />
      <OurBrand />
      <Submit />
    </main>
  );
}
