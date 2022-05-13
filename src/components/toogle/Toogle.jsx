import "./toogle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toogle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src="/Images/sun.png" alt="" className="t-icon" />
      <img src="/Images/moon.png" alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toogle;
