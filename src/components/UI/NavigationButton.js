import { NavLink } from "react-router-dom";
import styles from "./NavigationButton.module.css";

const NavigationButton = (props) => {
  const classes = `clean_navlink ${styles.navigation_card} ` + props.className
  const icon = require("../../assets/"+ props.title.toLowerCase() +"_icon.png");

  return (
    <NavLink className={classes} to={props.goTo}>
      <img className={styles.icon} src={icon} alt={props.title + " icon"} /> 
      <div className={styles.title}>{props.title}</div>
    </NavLink>
  );
};

export default NavigationButton;
