import { Image, Row, Col, Button, Container } from "react-bootstrap";
import Burner from "../components/Burner";
import Oven from "../components/Oven";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe }) => {
  const ovenAndStoveOff = {
    oven: "Off",
    frontLeftBurner: "Off",
    frontRightBurner: "Off",
    backLeftBurner: "Off",
    backRightBurner: "Off",
  };
  const [temperatures, setTemperatures] = useState(ovenAndStoveOff);

  // Update the temperature of the appropriate burner/oven in the figure
  const updateTemp = ({ location, value }) => {
    let currentTemps = { ...temperatures };
    currentTemps[location] = value;
    setTemperatures(currentTemps);
  };

  useEffect(() => {
    // Scroll to the top of the page when it first renders
    window.scrollTo(0, 0);
    // Reset the oven and burners when the page first renders
    setTemperatures(ovenAndStoveOff);
  }, []);

  const {
    name,
    hours,
    imageURL,
    complexity,
    servings,
    source,
    ingredients,
    instructions,
    nutritionFacts,
    equipment,
  } = recipe;

  return (
    <>
      <Row>
        <Link to="/">
          <Image
            style={{ position: "absolute", top: 30, left: 30 }}
            height="30"
            src="./magnifier.png"
          />
        </Link>
        <Col xl="auto">
          <Image
            style={{ objectFit: "cover", marginBottom: 20, borderRadius: 30 }}
            height={300}
            width={300}
            src={imageURL}
          />
        </Col>
        <Col style={{ marginLeft: 75 }}>
          <div style={{ marginTop: 30, marginBottom: 40 }}>
            <h1>{name}</h1>
            <p>
              <a href={source}>View Original Source</a>
            </p>
          </div>
          <p>
            Time: {hours} {hours === 1 ? "hour" : "hours"}
          </p>
          <p>Complexity: {complexity} out of 5</p>
          <p>Servings: {servings}</p>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col xl={5}>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </Col>
        <Col>
          <h2>Nutrition Facts</h2>
          <ul>
            {nutritionFacts.map((nutritionFact, index) => {
              return <li key={index}>{nutritionFact}</li>;
            })}
          </ul>
        </Col>
        <Col>
          <h2>Equipment</h2>
          <ul>
            {equipment.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
            })}
          </ul>
        </Col>
      </Row>

      <Row style={{ marginTop: 30 }}>
        <Col>
          <h2>Instructions</h2>
          <ol>
            {instructions.map((instruction, index) => {
              return (
                <div key={index} style={{ margin: 10 }}>
                  <li>{instruction.text}</li>
                  {instruction.button && (
                    <Button
                      style={{ marginTop: 5 }}
                      className="greenButton"
                      onClick={() =>
                        updateTemp({
                          location: instruction.button.location,
                          value: instruction.button.value,
                        })
                      }
                    >
                      {instruction.button.text}
                    </Button>
                  )}
                </div>
              );
            })}
          </ol>
        </Col>
        <div style={{ marginLeft: 50 }}>
          <Container
            style={{
              marginBottom: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              className="greenButton"
              onClick={() => setTemperatures(ovenAndStoveOff)}
            >
              Turn off oven and burners
            </Button>
          </Container>
          <div
            style={{
              borderColor: "#2E3338",
              borderWidth: "3px",
              borderStyle: "solid",
              backgroundColor: "#495159",
            }}
          >
            <Col style={{ padding: 0 }}>
              <Row style={{ marginTop: 30 }}>
                <Col style={{ margin: 20 }}>
                  <Burner temperature={temperatures.backLeftBurner} />
                </Col>
                <Col style={{ margin: 20 }}>
                  <Burner temperature={temperatures.backRightBurner} />
                </Col>
              </Row>
              <Row>
                <Col style={{ margin: 20 }}>
                  <Burner temperature={temperatures.frontLeftBurner} />
                </Col>
                <Col style={{ margin: 20 }}>
                  <Burner temperature={temperatures.frontRightBurner} />
                </Col>
              </Row>
              <hr
                style={{
                  borderTop: "5px solid #2E3338",
                  marginTop: 30,
                  padding: 0,
                }}
              />
              <Row>
                <Col style={{ margin: 20 }}>
                  <Oven temperature={temperatures.oven} />
                </Col>
              </Row>
            </Col>
          </div>
        </div>
      </Row>
    </>
  );
};

export default RecipeDetails;
