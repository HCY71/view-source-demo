interface BodyProps {
  // Add props here
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = (props) => {
  return <p className="text-desktop-body">{props.children}</p>;
};

export default Body;
