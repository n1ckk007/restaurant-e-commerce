import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/" onClick={toggle}>
          Pizzas
        </SidebarLink>
        <SidebarLink to="/" onClick={toggle}>
          Desserts
        </SidebarLink>
        <SidebarLink to="/" onClick={toggle}>
          Full Menu
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/" onClick={toggle}>
          Order Now
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
