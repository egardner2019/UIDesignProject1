import { Image, Row, Col, Button } from "react-bootstrap";
import Burner from "../components/Burner";

const RecipeDetails = ({ recipe }) => {
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
                    <Button>{instruction.button.text}</Button>
                  )}
                </div>
              );
            })}
          </ol>
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
                <Burner temperature={"medium"} />
              </Col>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={"high"} />
              </Col>
            </Row>
            <Row>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={"low"} />
              </Col>
              <Col style={{ margin: "20px" }}>
                <Burner temperature={"medium-low"} />
              </Col>
            </Row>
            <Row>
              <Col style={{ margin: "20px" }}>
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
                    }}
                  >
                    350°F
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </Row>
    </>
  );
};

export default RecipeDetails;
