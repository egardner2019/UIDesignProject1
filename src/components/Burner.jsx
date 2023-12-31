import { HeatColors, Temperatures } from "../assets/Constants";

const Burner = ({ temperature }) => {
  // Set the color of the burner depending on its current temperature
  let color;
  if (temperature === Temperatures.High) color = HeatColors.High;
  else if (temperature === Temperatures.MediumHigh)
    color = HeatColors.MediumHigh;
  else if (temperature === Temperatures.Medium) color = HeatColors.Medium;
  else if (temperature === Temperatures.MediumLow) color = HeatColors.MediumLow;
  else if (temperature === Temperatures.Low) color = HeatColors.Low;
  else if (temperature === Temperatures.Off) color = HeatColors.Off;

  const burnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    borderColor: "#2E3338",
    borderWidth: "3px",
    borderStyle: "solid",
    textAlign: "center",
    backgroundColor: color,
  };

  return <div style={burnerStyle}>{temperature}</div>;
};

export default Burner;
