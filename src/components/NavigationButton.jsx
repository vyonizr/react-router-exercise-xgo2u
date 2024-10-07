/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavigationButton = ({ title, destination }) => {
  return (
    <Link to={destination}>
      <button>{title}</button>
    </Link>
  );
};

export default NavigationButton;
