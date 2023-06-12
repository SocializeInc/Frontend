import "./NavigationCard.css";

const NavigationCard = (props) => {
  const classes = "navigation-card " + props.className;

  return (
    <div className={classes}>
      <div className="title">{props.title}</div>
    </div>
  );
};

export default NavigationCard;
