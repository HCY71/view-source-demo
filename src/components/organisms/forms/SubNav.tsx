interface SubNavProps {
  // Add props here
}

const SubNav: React.FC<SubNavProps> = (props) => {
  const navs = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "This Month",
      link: "#this-month",
    },
    {
      name: "Our Brand",
      link: "#our-brand",
    },
    {
      name: "Submit Products",
      link: "#submit-products",
    },
  ];
  return (
    <nav className="fixed bottom-0 z-50 w-full overflow-x-scroll border-y border-dashed border-locavore-black bg-background font-fakeReceipt text-[0.75rem]">
      <ul className="flex w-max gap-20 px-[30px] py-[21px]">
        {navs.map((n) => (
          <li
            key={n.name}
            className="border-b border-dashed border-transparent duration-300 hover:border-locavore-black"
          >
            <a href={n.link}>{n.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNav;
