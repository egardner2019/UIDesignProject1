import { Image, Row, Col, Button, Container } from "react-bootstrap";
import Burner from "../components/Burner";
import Oven from "../components/Oven";
import { useEffect, useState } from "react";

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
        <Col xl="auto">
          <Image
            style={{ objectFit: "cover", marginBottom: "20px" }}
            height={300}
            width={300}
            src={imageURL}
            rounded
          />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>
            <a href={source}>View Original Source</a>
          </p>
          <p>Time: {hours}</p>
          <p>Complexity: {complexity}</p>
          <p>Servings: {servings}</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </Col>
        <Col>
          <h2>Necessary Equipment</h2>
          <ul>
            {equipment.map((equipment, index) => {
              return <li key={index}>{equipment}</li>;
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
      </Row>

      <Row>
        <Col>
          <h2>Instructions</h2>
          <ol>
            {instructions.map((instruction, index) => {
              return (
                <div key={index}>
                  <li>{instruction.text}</li>
                  {instruction.button && (
                    <Button
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
          <Container
            style={{
              marginTop: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => setTemperatures(ovenAndStoveOff)}>
              Turn off oven and burners
            </Button>
          </Container>
        </Col>
        <div
          style={{
            borderColor: "black",
            borderWidth: "5px",
            borderStyle: "solid",
          }}
        >
          <Col>
            <Row>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={temperatures.backLeftBurner} />
              </Col>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={temperatures.backRightBurner} />
              </Col>
            </Row>
            <Row>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={temperatures.frontLeftBurner} />
              </Col>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={temperatures.frontRightBurner} />
              </Col>
            </Row>
            <Row>
              <Col style={{ margin: "20px" }}>
                <Oven temperature={temperatures.oven} />
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default RecipeDetails;
