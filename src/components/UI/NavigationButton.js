import "./NavigationButton.css";

const NavigationButton = (props) => {
  const classes = "navigation-card " + props.className;

  return (
    <div className={classes}>
      <div className="title">{props.title}</div>
    </div>
  );
};

export default NavigationButton;
