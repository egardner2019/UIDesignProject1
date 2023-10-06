import { HeatColors, Temperatures } from "../assets/Constants";

const Oven = ({ temperature }) => {
  // Decide on the color of the oven depending on its current temperature
  let color;
  if (temperature === Temperatures.Off) color = HeatColors.Off;
  else if (temperature < 200) color = HeatColors.Low;
  else if (temperature <= 250) color = HeatColors.MediumLow;
  else if (temperature <= 300) color = HeatColors.Medium;
  else if (temperature <= 350) color = HeatColors.MediumHigh;
  else color = HeatColors.High;

  const ovenStyle = {
    margin: "auto",
    height: "275px",
    width: "600px",
    borderColor: "#2E3338",
    borderWidth: "3px",
    borderStyle: "solid",
    backgroundColor: "#646e79",
  };

  const ovenWindowStyle = {
    margin: "20px auto",
    height: "200px",
    width: "450px",
    borderColor: "#2E3338",
    borderWidth: "3px",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
  };

  return (
    <div style={ovenStyle}>
      <div style={ovenWindowStyle}>
        {temperature === Temperatures.Off ? temperature : temperature + "°F"}
      </div>
    </div>
  );
};

export default Oven;
