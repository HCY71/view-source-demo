interface BodyProps {
  // Add props here
  children: React.ReactNode;
  className?: string;
}

const Body: React.FC<BodyProps> = (props) => {
  return (
    <p className={`text-desktop-body ${props.className}`}>{props.children}</p>
  );
};

export default Body;
