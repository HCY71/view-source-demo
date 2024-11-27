interface OurBrandProps {
  // Add props here
}
import H3 from "@/components/atoms/text/H3";

const OurBrand: React.FC<OurBrandProps> = (props) => {
  const mockData = [
    {
      type: "A",
      items: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
    },
    {
      type: "B",
      items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
    },
    { type: "C", items: ["lorem ipsum", "lorem ipsum"] },
    {
      type: "D",
      items: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
    },
    { type: "E", items: ["lorem ipsum", "lorem ipsum", "lorem ipsum"] },
    {
      type: "F",
      items: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
    },
    {
      type: "G",
      items: ["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"],
    },
    { type: "H", items: ["lorem ipsum", "lorem ipsum"] },
    {
      type: "I",
      items: [
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
        "lorem ipsum",
      ],
    },
    { type: "J", items: ["lorem ipsum", "lorem ipsum", "lorem ipsum"] },
  ];
  return (
    <section
      id="our-brand"
      className="px-4 pb-10 pt-[60px] md:pb-20 xl:px-[30px] xl:pb-[60px]"
    >
      <div className="3xl:container-max-w flex flex-col gap-10 md:flex-row md:gap-16">
        <H3 className="xl:text-desktop-h1 h-fit md:sticky md:top-[60px]">
          Our Brands
        </H3>
        <div className="w-full columns-1 md:columns-2 md:gap-x-14 xl:columns-3 xl:gap-x-[70px]">
          {mockData.map((d) => (
            <div
              key={d.type}
              className="mb-5 break-inside-avoid-column border-b border-dashed border-locavore-black pb-10 pt-5 md:h-fit xl:mb-8"
            >
              <h4 className="text-desktop-sub xl:text-desktop-h4 mb-5 xl:mb-6">
                {d.type}
              </h4>
              <ul className="columns-2 md:columns-1">
                {d.items.map((item) => (
                  <li
                    key={item + Math.random()}
                    className="py-1 font-ppNeueMontreal text-[1.0625rem] font-medium leading-[1.5] tracking-[0.010625rem] xl:text-[1.1875rem] xl:leading-[1.7] xl:tracking-[0.010625rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
