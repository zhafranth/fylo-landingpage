import React from "react";
import LogoFylo from "../../assets/logo.svg";
import { MainHeader, Logo, ListMenu, Menu, MenuItem } from "./Style";

const Header = () => {
  return (
    <MainHeader>
      <Logo src={LogoFylo} />
      <ListMenu>
        <Menu>
          <MenuItem>Features</MenuItem>
        </Menu>
        <Menu>
          <MenuItem>Team</MenuItem>
        </Menu>
        <Menu>
          <MenuItem>Sign In</MenuItem>
        </Menu>
      </ListMenu>
    </MainHeader>
  );
};

export default Header;
