interface ButtonProps {
  // Add props here
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="text-desktop-button w-fit rounded-full border border-dashed border-transparent bg-locavore-black px-5 py-2 text-locavore-paperWhite duration-300 hover:border-locavore-black hover:bg-transparent hover:text-locavore-black"
    >
      {props.children}
    </button>
  );
};

export default Button;
