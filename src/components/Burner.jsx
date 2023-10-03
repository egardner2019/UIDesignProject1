const Burner = ({ temperature }) => {
  // Set the color of the burner depending on its current temperature
  let color;
  if (temperature === "high") color = "red";
  else if (temperature === "medium-high") color = "darkorange";
  else if (temperature === "medium") color = "orange";
  else if (temperature === "medium-low") color = "sandybrown";
  else if (temperature === "low") color = "yellow";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "150px",
        width: "150px",
        borderRadius: "50%",
        borderColor: "black",
        borderWidth: "5px",
        borderStyle: "solid",
        textAlign: "center",
        backgroundColor: color,
      }}
    >
      {temperature}
    </div>
  );
};

export default Burner;
