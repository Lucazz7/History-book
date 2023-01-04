import "./side.scss";
interface SideBarComponent {
  children: React.ReactNode;
}

export const SideBar: React.FC<SideBarComponent> = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};
