import { NavLink } from "react-router-dom";
import "./NavigationButton.css";

const NavigationButton = (props) => {
  return (
    <NavLink className="navigation-card clean_navlink" to={props.goTo}>
      <div className="title">{props.title}</div>
    </NavLink>
  );
};

export default NavigationButton;
