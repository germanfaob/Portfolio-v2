import "./switch.css";
import { useTheme } from "../../hooks/useTheme";

export const Switch = () => {
  const [theme, handleChange] = useTheme("light");

  return (
    <div className="container-switch">
      <span className="switch-text">Light/Dark</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider">
          <img className="switch-icon sun" src="../images/sun.svg" />
          <img className="switch-icon moon" src="../images/moon.svg" />
        </span>
      </label>
    </div>
  );
};
