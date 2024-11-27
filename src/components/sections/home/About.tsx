interface AboutProps {
  // Add props here
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <section
      className="flex-center border-b border-dashed border-locavore-black px-3 py-[100px] xl:pt-[200px]"
      id="about"
    >
      <h4 className="xl:text-desktop-h2 whitespace-pre-wrap text-center font-arialRounded text-[1.875rem] leading-[1.1] tracking-[-0.1rem] md:max-w-[70%] md:text-[2.375rem] xl:max-w-[81.25%] 2xl:max-w-[1280px]">
        {/* {`An emporium of\n local goods, all\n grown / baked / fabricated\n / assembled / crafted /\n concocted / sewn / stuffed\n / pickled within 100 miles\n of NYC.`} */}
        {`An emporium of local goods, all grown / baked / fabricated / assembled / crafted / concocted / sewn / stuffed / pickled within 100 miles of NYC.`}
      </h4>
    </section>
  );
};

export default About;
