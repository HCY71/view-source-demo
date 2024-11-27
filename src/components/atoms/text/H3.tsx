interface H3Props {
  // Add props here
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = (props) => {
  return <h3 className="text-desktop-h3">{props.children}</h3>;
};

export default H3;
