import "./side.scss";
interface SideBarComponent {
  children: string[];
}

export const SideBar: React.FC<SideBarComponent> = ({ children }) => {
  return (
    <div className="sidebar">
      <div className="components">
        {children &&
          children.map((item) => (
            <div className="component" key={item}>
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};
