interface AboutProps {
  // Add props here
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <section
      className="flex-center border-b border-dashed border-locavore-black px-3 py-[100px]"
      id="about"
    >
      <h4 className="whitespace-pre-wrap text-center font-arialRounded text-[1.875rem] leading-[1.1] tracking-[-0.1rem]">
        {`An emporium of\n local goods, all\n grown / baked / fabricated\n / assembled / crafted /\n concocted / sewn / stuffed\n / pickled within 100 miles\n of NYC.`}
      </h4>
    </section>
  );
};

export default About;
