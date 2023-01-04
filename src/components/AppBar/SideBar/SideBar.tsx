import { SideBarComponents, SideBarItem, SideBarStyle } from "./SideBarStyle";

interface SideBarComponent {
  children: string[];
  color?: string;
  hoverColor?: string;
}

export const SideBar: React.FC<SideBarComponent> = ({
  children,
  color,
  hoverColor,
}) => {
  return (
    <SideBarStyle style={{ background: `${color}` }}>
      <SideBarComponents>
        {children &&
          children.map((item) => (
            <SideBarItem key={item} hoveR={`${hoverColor}`}>
              {item}
            </SideBarItem>
          ))}
      </SideBarComponents>
    </SideBarStyle>
  );
};
