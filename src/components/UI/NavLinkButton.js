import { NavLink } from "react-router-dom";

const NavLinkButton = (props) => {
  const classes = `clean_navlink ${props.className}`;
  return (
    <NavLink className={classes} to={props.goTo} onClick={props.onClick}>
      {props.children}
    </NavLink>
  );
};

export default NavLinkButton;
