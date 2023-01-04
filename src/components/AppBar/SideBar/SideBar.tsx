import { SideBarComponents, SideBarItem, SideBarStyle } from "./SideBarStyle";

interface SideBarComponent {
  children: string[];
}

export const SideBar: React.FC<SideBarComponent> = ({ children }) => {
  return (
    <SideBarStyle>
      <SideBarComponents>
        {children &&
          children.map((item) => <SideBarItem key={item}>{item}</SideBarItem>)}
      </SideBarComponents>
    </SideBarStyle>
  );
};
