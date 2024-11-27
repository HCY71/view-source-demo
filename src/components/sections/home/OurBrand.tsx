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
      className="grid gap-5 px-4 py-[60px] md:grid-cols-3"
    >
      <H3>Our Brands</H3>
      {mockData.map((d) => (
        <div
          key={d.type}
          className="border-b border-dashed border-locavore-black pb-10 pt-5 md:h-fit"
        >
          <h4 className="text-desktop-sub mb-5">{d.type}</h4>
          <ul className="columns-2 md:columns-1">
            {d.items.map((item) => (
              <li
                key={item + Math.random()}
                className="py-1 font-ppNeueMontreal text-[1.0625rem] font-medium leading-[1.5] tracking-[0.010625rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default OurBrand;
