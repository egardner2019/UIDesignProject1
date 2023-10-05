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

  return (
    <div
      style={{
        margin: "auto",
        height: "300px",
        width: "600px",
        borderColor: "black",
        borderWidth: "5px",
        borderStyle: "solid",
      }}
    >
      <div
        style={{
          margin: "20px auto",
          height: "200px",
          width: "400px",
          borderColor: "black",
          borderWidth: "5px",
          borderStyle: "solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        {temperature === Temperatures.Off ? temperature : temperature + "°F"}
      </div>
    </div>
  );
};

export default Oven;
