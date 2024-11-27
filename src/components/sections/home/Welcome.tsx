interface WelcomeProps {
  // Add props here
}
import Logo from "@/components/molecules/Logo";

const Welcome: React.FC<WelcomeProps> = (props) => {
  return (
    <section className="3xl:gap-20 flex h-screen flex-col items-center justify-between pb-[130px] pt-[70px] md:h-[unset] md:gap-[145px] xl:h-screen xl:flex-row xl:justify-center xl:gap-[60px] xl:pb-10 xl:pt-0">
      <h5 className="text-mobile-h5 xl:text-desktop-h5 whitespace-pre-wrap text-center">
        {`434 6th ST\nGreenwicH\nVILLAGE`.toLocaleUpperCase()}
      </h5>
      <Logo />
      <h5 className="text-mobile-h5 xl:text-desktop-h5 whitespace-pre-wrap text-center">
        {`OPEN DAILY\n10am-7pm`.toLocaleUpperCase()}
      </h5>
    </section>
  );
};

export default Welcome;
